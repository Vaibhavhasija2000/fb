import React from 'react';
import classes from './Widgets.css';
function Widgets() {
    return(
        <div className={classes.widgets}>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FGoogleIndia%2Fposts%2F2863036900597404&show_text=true&width=552&height=654&appId" width="200" height="654"style={{border:"none",overflow:"hidden"}}  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

        </div>
    );
}
export default Widgets;
