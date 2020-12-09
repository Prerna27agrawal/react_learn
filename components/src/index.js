import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                timeAgo="today at 4:45" 
                comment="comment1"
                image={faker.image.image()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                timeAgo="today at 2:00 am"
                comment="comment2" 
                image={faker.image.image()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                author="Jane" 
                timeAgo="yesterday 5:00pm" 
                comment="comment3"
                image={faker.image.image()}
            />
        </ApprovalCard>
    </div>
    )
};
 ReactDom.render(<App />,document.querySelector('#root'));
