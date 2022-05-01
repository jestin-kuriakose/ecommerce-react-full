import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { NavigateBefore, Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/apiCalls";
import { useHistory } from "react-router-dom";



export default function Product() {
    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([])
    const dispatch = useDispatch();
    const history = useHistory();

    const location = useLocation()
    const productId = location.pathname.split("/")[2];

    const [pStats, setPStats] = useState()

    const product = useSelector((state) => state.product.products.find((product)=>product._id === productId))
    const MONTHS = useMemo(()=>
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],[])

    useEffect(()=> {
        const getStats = async () => {
            try {
                const res = await userRequest.get("orders/income?pid=" + productId)
                res.data.map((item) =>
                    setPStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], Sales: item.total },
                    ]))
            } catch (err){
                console.log(err);
            }
        }
        getStats()
    }, [productId, MONTHS])

    const handleChange = (e) => {
        setInputs(prev => {
          return {...prev, [e.target.name]: e.target.value}
        })
      }

    const handleClick = (e) => {
        e.preventDefault();

        if(file) {
            const fileName = new Date().getTime() + file.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', 
            (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                console.log('Upload is paused');
                break;
                case 'running':
                console.log('Upload is running');
                break;
            }
            }, 
            (error) => {
            // Handle unsuccessful uploads
            }, 
            () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const updProduct = {...inputs, img: downloadURL, categories: cat};
                console.log(updProduct)
                updateProduct(productId, updProduct, dispatch)

            });
            }
            );
        } else {
            const updProduct = {...inputs, categories: cat};
            console.log(updProduct)
            updateProduct(productId, updProduct, dispatch)
        }
        history.push('/products')
    }



  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/products">
          <button className="productAddButton">All Products</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={pStats} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id: </span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales: </span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active: </span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock: </span>
                      <span className="productInfoValue">{product.inStock ? "Yes" : "No"}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input name="title" type="text" placeholder={product.title} onChange={handleChange}/>
                  <label>Product Description</label>
                  <input name="desc" type="text" placeholder={product.desc} onChange={handleChange} />
                  <label>Product Price</label>
                  <input name="price" type="number" placeholder={product.price} onChange={handleChange} />
                  <label>Stock</label>
                  <input name="stock" type="number" placeholder={product.stock} onChange={handleChange} />
                  
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}}  onChange={e=>setFile(e.target.files[0])}/>
                  </div>
                  <button className="productButton" onClick={handleClick}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
