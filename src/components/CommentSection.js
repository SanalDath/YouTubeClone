import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';

const CommentSection = ({ id }) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyA7jPwS6iNFgX3kAmGzH0hwJBRg0Nmh-Nw&textFormat=plainText&part=snippet&videoId=${id}&maxResults=50`);
                const json = await response.json();
                setComment(json?.items || []);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        getComments();
    }, [id]);

    return (
        <div>
            {comment.length > 0 ? (
                comment.map((item, index) => (
                    <CommentCard
                        key={index}
                        authorChannelUrl={item?.snippet?.topLevelComment?.snippet?.authorChannelUrl}
                        authorDisplayName={item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                        authorProfileImageUrl={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                        publishedAt={item?.snippet?.topLevelComment?.snippet?.publishedAt}
                        textDisplay={item?.snippet?.topLevelComment?.snippet?.textDisplay}
                        likeCount={item?.snippet?.topLevelComment?.snippet?.likeCount}
                    />
                ))
            ) : (
                <p>No comments available</p>
            )}
        </div>
    );
};

export default CommentSection;

