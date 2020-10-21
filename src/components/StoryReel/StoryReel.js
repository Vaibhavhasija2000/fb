import React from 'react';
import classes from './StoryReel.css'; 
import Story from '../Story/Story';
function StoryReel() {
    return (
        <div className={classes.storyReel}>
            <Story 
            image="https://i.imgflip.com/32i81f.jpg"
            profileSrc="https://images.news18.com/ibnlive/uploads/2019/09/Akshay-Kumar-3.jpg?impolicy=website&width=534&height=356"
            title="raju" />
            <Story 
            image="https://i.imgflip.com/47ps9a.jpg"
            profileSrc="https://scontent.fdel1-3.fna.fbcdn.net/v/t1.0-9/10551076_1509635529273523_9078190582281763143_n.png?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=3Js1s_6KaloAX-aZxZX&_nc_ht=scontent.fdel1-3.fna&oh=8657fcea71f6eb2c937b5486051beba9&oe=5F9764BA"
            title="Baburao" />
            <Story 
            image="https://m.media-amazon.com/images/M/MV5BMTY3Nzg2NjA1OF5BMl5BanBnXkFtZTgwMjY5NTU1MzI@._V1_QL50_.jpg"
            profileSrc="https://nextalerts.com/wp-content/uploads/2020/07/1e8ec3ef48ef7eef8112ff056f285a19-990x1238.jpg"
            title="Alexandra Hasija" />
            <Story 
            image="https://img.mensxp.com/media/content/2019/Aug/the-land-kara-de-guy-has-landed-in-a-lot-of-memes-1400x653-1566979910_1100x513.jpg"
            profileSrc="https://img.mensxp.com/media/content/2019/Aug/the-land-kara-de-guy-has-landed-in-a-lot-of-memes-1400x653-1566979910_1100x513.jpg"
            title="MC" />
            <Story 
            image="https://img.theweek.in/content/dam/week/news/india/images/2020/5/19/arnab-rep.jpg"
            profileSrc="https://img.theweek.in/content/dam/week/news/india/images/2020/5/19/arnab-rep.jpg"
            title="Arnub ghuswami" />
            
            




            
        </div>
    )
}

export default StoryReel;
