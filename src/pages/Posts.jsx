import React, { useState } from "react";
import {
  Card,
  Avatar,
  Spinner,
  CardHeader,
  CardBody,
  Modal,
  Button,
  Link,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardFooter,
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import usePosts from "../hooks/usePosts";
import useUsers from "../hooks/useUsers";
import useComments from "../hooks/useComments";

const Posts = () => {
  const { posts, loading: postsLoading } = usePosts();
  const { users, loading: usersLoading } = useUsers();
  const { comments, loading: commentsLoading } = useComments();
  const [expandedPostId, setExpandedPostId] = useState(null);

  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (postsLoading || usersLoading || commentsLoading) {
    return (
      <Spinner size="lg" className="flex items-center justify-center">
        Loading...
      </Spinner>
    );
  }

  const getUserById = (userId) => users.find((user) => user.id === userId);
  const getCommentsByPostId = (postId) =>
    comments.filter((comment) => comment.postId === postId);

  const handleCommentClick = (post) => {
    setSelectedPost(post);
    const user = getUserById(post.userId);
    setSelectedUser(user);
    onOpen();
  };

  const toggleExpandPost = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <h1 className="mb-4 text-3xl font-bold text-center text-customBlue">Posts</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const user = getUserById(post.userId);
          const postComments = getCommentsByPostId(post.id);

          return (
            <Card
              key={post.id}
              className={`relative p-6 shadow-lg rounded-lg transition-all duration-300 ${
                expandedPostId === post.id ? 'h-auto' : 'h-30'
              }`}
              onMouseEnter={() => toggleExpandPost(post.id)}
              onMouseLeave={() => toggleExpandPost(post.id)}
            >
              <CardHeader>
                <Avatar text={user?.name[0]} size="md" color="primary" />
                <div style={{ marginLeft: "10px" }}>
                  <p>{user?.name}</p>
                  <p style={{ color: "gray", fontSize: "14px" }}>
                    {user?.email}
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <p style={{ fontWeight: "bold" }}>{post.title}</p>
                {expandedPostId === post.id && (
                  <p className="text-[#50858B] mt-2">{post.body}</p>
                )}
              </CardBody>
              <CardFooter className="flex justify-end">
                <Link
                  onClick={() => handleCommentClick(post)}
                  style={{
                    cursor: "pointer",
                    color: "#0072F5",
                    fontWeight: "bold",
                  }}
                >
                  See {postComments.length} comments
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {selectedPost && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          size="2xl"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <Card key={selectedPost.id} className="shadow-none">
                    <CardBody className="flex flex-row">
                      <div className="p-4 border-2 rounded-md">
                        <CardHeader>
                          <Avatar
                            text={selectedUser?.name[0]}
                            size="md"
                            color="primary"
                          />
                          <div style={{ marginLeft: "10px" }}>
                            <p>{selectedUser?.name}</p>
                            <p style={{ color: "gray", fontSize: "14px" }}>
                              {selectedUser?.email}
                            </p>
                          </div>
                        </CardHeader>
                        <p style={{ fontWeight: "bold" }}>
                          {selectedPost.title}
                        </p>
                        <p>{selectedPost.body}</p>
                      </div>
                      <div className="h-[25em] overflow-auto border-2 p-4 rounded-md">
                        <p className="font-bold text-primary">Comments:</p>
                        {getCommentsByPostId(selectedPost.id).map((comment) => (
                          <div
                            key={comment.id}
                            className="gap-4 p-2 mb-2 border-2 rounded-md"
                          >
                            <p className="text-customPurple-dark2">
                              By {comment.email}
                            </p>
                            <p>{comment.body}</p>
                          </div>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Posts;
