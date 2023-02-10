import React from 'react';
import s from './Post.module.css';
import {debuglog} from 'util';

type MessageProps = {
    message: string;
}
function Post(props: MessageProps) {
    return (
        <div className={s.item}>
            <img
                src="https://st2.depositphotos.com/2872743/10119/i/600/depositphotos_101190820-stock-photo-cartoon-mustache-face-cute-emoticon.jpg"/>
            { props.message }
            <div>
                <span>like</span>
            </div>
        </div>

    );
}

export default Post;