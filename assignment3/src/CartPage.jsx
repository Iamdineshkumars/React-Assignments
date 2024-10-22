import './cart.css'
const CartPage = () => {
  return (
    <div id = "main">
        <h1 className="title">Our Tours</h1>
        <div id= "cart_div">
            <div className ="cart1">
                <div className="image_div"><img src="https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg" className="image"/><div id="price"><p>price</p></div></div>
                <div className="section2">
                <h3 className="heading">Best Of Paris In 7 Days Tour</h3>
                <p className="para">Paris is synonymous with the finest things that culture can offer -in ,fashion,food,literature,and ideas. On this tour,your Paris-savvy Rick Steves guide will immerse you in the very best of...</p>
                <h5 className="head">Read More</h5>
                <p className="para1">Not Intersted</p>
                </div>
            </div>

            <div className ="cart1">
                <div className="image_div"><img src="https://thumbs.dreamstime.com/b/cliffs-moher-ireland-travel-traveling-sea-nature-tourism-ocea-cliffs-moher-ireland-travel-traveling-sea-nature-tourism-ocean-104090288.jpg" className="image"/></div>
                <div className="section2">
                <h3 className="heading">Best Of Ireland In 14 Days Tour</h3>
                <p className="para">Rick Steves'Best of Ireland tour Kicks off with the best of Dublin,followed by Ireland's must-see historical sites,charming towns,music-filled pubs,and seaside getaways-including Kinsale...</p>
                <h5 className="head">Read More</h5>
                <p className="para1">Not Intersted</p>
                </div>
            </div>

            <div className ="cart1">
                <div className="image_div"><img src="https://media.cntraveler.com/photos/5a381b5ebbb64f1f2f4ef8e4/master/pass/Mirabell-Gardens-Salzburg-GettyImages-488873472.jpg" className="image"/></div>
                <div className="section2">
                <h3 className="heading">Best Of Salzburg & Vienna In 8 Days Tour</h3>
                <p className="para">Paris is synonymous with the finest things that culture can offer -in ,fashion,food,literature,and ideas. On this tour,your Paris-savvy Rick Steves guide will immerse you in the very best of...</p>
                <h5 className="head">Read More</h5>
                <p className="para1">Not Intersted</p>
                </div>
            </div>

            <div className ="cart1">
                <div className="image_div"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kre3Ye2IsJvKPivw6kOK0rN0uP7nkfOGyA&s" className="image"/></div>
                <div className="section2">
                <h3 className="heading">Best Of Rome In 7 Days Tour</h3>
                <p className="para">Paris is synonymous with the finest things that culture can offer -in ,fashion,food,literature,and ideas. On this tour,your Paris-savvy Rick Steves guide will immerse you in the very best of...</p>
                <h5 className="head">Read More</h5>
                <p className="para1">Not Intersted</p>
                </div>
            </div>
           
            <div className ="cart1">
                <div className="image_div"><img src="https://thumbs.dreamstime.com/b/wawel-castle-famous-landmark-krakow-poland-picturesque-landscape-coast-river-wisla-autumn-sunset-white-sky-cloud-102587058.jpg" className="image"/></div>
                <div className="section2">
                <h3 className="heading">Best Of Poland In 10 Days Tour</h3>
                <p className="para">Paris is synonymous with the finest things that culture can offer -in ,fashion,food,literature,and ideas. On this tour,your Paris-savvy Rick Steves guide will immerse you in the very best of...</p>
                <h5 className="head">Read More</h5>
                <p className="para1">Not Intersted</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CartPage