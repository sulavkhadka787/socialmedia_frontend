import PostComments from "./PostComments";
import CommentInputField from "./CommentInputField";
import calculateTime from "../../utils/calculateTime";
import { deletePost, likePost } from "../../utils/postActions";
import Link from "next/Link";
import LikesList from "./LikesList";
import { Card, Grid, Modal, Image, Icon, Divider } from "semantic-ui-react";

const NoImageModal = ({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments,
}) => {
  return (
    <>
      <Card fluid>
        <Card.Content>
          <Image floated="left" avatarsrc={post.user.profilePicUrl} />
          <Card.Header>
            <Link href={`/${post.user.username}`}>
              <a>{post.user.name}</a>
            </Link>
          </Card.Header>

          <Card.Meta>{calculateTime(post.createdAt)}</Card.Meta>
          {post.location && <Card.Meta content={post.location} />}
          <Card.Description
            style={{
              fontSize: "17px",
              letterSpacing: "0.1px",
              wordSpacing: "0.35px",
            }}
          >
            {post.text}
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Icon
            name={isLiked ? "heart" : "heart outline"}
            color="red"
            style={{ cursor: "pointer" }}
            onClick={() =>
              likePost(post._id, user._id, setLikes, isLiked ? false : true)
            }
          />

          <LikesList
            postId={post._id}
            trigger={
              likes.length > 0 && (
                <span className="spanLikesList">
                  {`${likes.length} ${likes.length === 1 ? "like" : "likes"}`}
                </span>
              )
            }
          />
          <Divider hidden />
          <div
            style={{
              overflow: "auto",
              height: "60px",
              marginBottom: "8px",
            }}
          >
            {comments.length > 0 &&
              comments.map((comment) => (
                <PostComments
                  key={comment._id}
                  comment={comment}
                  postId={post._id}
                  user={user}
                  setComments={setComments}
                />
              ))}
          </div>
          <CommentInputField
            postId={post._id}
            user={user}
            setComments={setComments}
          />
        </Card.Content>
      </Card>
    </>
  );
};

export default NoImageModal;
