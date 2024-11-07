import { Card } from '@nextui-org/react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import useAlbums from '../hooks/useAlbums';
import useComments from '../hooks/useComments';
import usePhotos from '../hooks/usePhotos';
import usePosts from '../hooks/usePosts';
import useTodos from '../hooks/useTodos';
import useUsers from '../hooks/useUsers';

const Dashboard = () => {
  const { albums, loading: albumsLoading } = useAlbums();
  const { comments, loading: commentsLoading } = useComments();
  const { photos, loading: photosLoading } = usePhotos();
  const { posts, loading: postsLoading } = usePosts();
  const { todos, loading: todosLoading } = useTodos();
  const { users, loading: usersLoading } = useUsers();

  const dataSources = [
    { title: 'Albums', data: albums, loading: albumsLoading },
    { title: 'Comments', data: comments, loading: commentsLoading },
    { title: 'Photos', data: photos, loading: photosLoading },
    { title: 'Posts', data: posts, loading: postsLoading },
    { title: 'Todos', data: todos, loading: todosLoading },
    { title: 'Users', data: users, loading: usersLoading },
  ];

  return (
    <div>
      <h1 className='mb-4 text-3xl font-bold text-center text-customBlue'>Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dataSources.map(({ title, data, loading }) => {
          const [isOpen, setIsOpen] = useState(false);

          return (
            <Card key={title} className="p-4 border border-primary-light text-customBlue-dark2 h-fit">
              <div className='flex justify-between'>
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-md">Total: {loading ? 'Loading...' : data.length}</p>
              </div>
              <Accordion>
                <AccordionItem
                  key={title}
                  aria-label={`Accordion of ${title}`}
                  title={`View first 3 ${title.toLowerCase()}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <ul>
                      {data.slice(0, 3).map((item, index) => (
                        <li className='flex items-center' key={index}>
                          <i>⮞</i>
                          <span className='ms-2'>{item.name || item.title || `Item ${index + 1}`}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionItem>
              </Accordion>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
