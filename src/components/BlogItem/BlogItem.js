import { Card } from "react-bootstrap"
import "./BlogItem.css"

const BlogItem = () => {
    return(
        <Card className="blog-item">
            <Card.Header>Ablation</Card.Header>
            <Card.Body>
                <Card.Title>What is Ablation</Card.Title>
                <Card.Text>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum has 
                </Card.Text>
                <span>
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 22 10" fill="none">
                        <path d="M15.4999 0.593694C15.4296 0.652259 15.3738 0.721934 15.3358 0.798703C15.2977 0.875471 15.2781 0.957812 15.2781 1.04098C15.2781 1.12414 15.2977 1.20648 15.3358 1.28325C15.3738 1.36002 15.4296 1.42969 15.4999 1.48826L18.9499 4.38614H1.29492C1.09601 4.38614 0.905244 4.45252 0.764592 4.57066C0.623939 4.6888 0.544922 4.84904 0.544922 5.01612C0.544922 5.1832 0.623939 5.34343 0.764592 5.46158C0.905244 5.57972 1.09601 5.64609 1.29492 5.64609H18.9349L15.4999 8.52508C15.3602 8.64311 15.2818 8.80278 15.2818 8.96921C15.2818 9.13564 15.3602 9.29531 15.4999 9.41334C15.6404 9.53068 15.8305 9.59654 16.0287 9.59654C16.2268 9.59654 16.4169 9.53068 16.5574 9.41334L21.3274 5.4067C21.3916 5.35496 21.4427 5.29285 21.4776 5.22411C21.5125 5.15536 21.5305 5.0814 21.5305 5.00667C21.5305 4.93193 21.5125 4.85797 21.4776 4.78923C21.4427 4.72048 21.3916 4.65837 21.3274 4.60663L16.5649 0.593694C16.4952 0.534648 16.4122 0.487781 16.3209 0.455798C16.2295 0.423815 16.1314 0.407349 16.0324 0.407349C15.9334 0.407349 15.8354 0.423815 15.744 0.455798C15.6526 0.487781 15.5696 0.534648 15.4999 0.593694Z" fill="white"/>
                    </svg>
                </span>
            </Card.Body>
      </Card>
    )
}

export default BlogItem