import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
  Pagination,
  Switch // Asegúrate de importar el componente Switch
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import useUsers from "../../../hooks/useUsers";

export default function UserTable() {
  const { users, loading, error, addUser, editUser, removeUser } = useUsers();

  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState(null);
  const { register, handleSubmit, setValue, formState: { errors, isSubmitted } } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
    }
  });
  const rowsPerPage = 5;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterValue.toLowerCase()) ||
    user.username.toLowerCase().includes(filterValue.toLowerCase()) ||
    user.email.toLowerCase().includes(filterValue.toLowerCase())
  );

  const pages = Math.ceil(filteredUsers.length / rowsPerPage);
  const items = filteredUsers.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setValue("name", user.name);
    setValue("username", user.username);
    setValue("email", user.email);
    onOpen();
  };

  const handleDelete = (user) => {
    removeUser(user.id);
  };

  const handleAdd = () => {
    setSelectedUser(null);
    onOpen();
  };

  const onSubmit = (data) => {
    if (selectedUser) {
      editUser(selectedUser.id, { ...data });
    } else {
      addUser({ ...data });
    }
    onClose();
  };

  // Nueva función para activar/desactivar usuario
  const toggleActive = (user) => {
    editUser(user.id, { ...user, active: !user.active });
  };

  useEffect(() => {
    if (!isOpen) {
      setValue("name", "");
      setValue("username", "");
      setValue("email", "");
    }
  }, [isOpen, setValue]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-2xl font-bold">Users</h3>
        <div className="flex gap-4">
          <Input
            placeholder="Search users..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            startContent={<i className="text-customBlue fas fa-search" />}
          />
          <Button
            className="px-8"
            color="primary"
            onPress={handleAdd}
            startContent={<i className=" fas fa-plus" />}
          >
            Add User
          </Button>
        </div>
      </div>

      <Table aria-label="User Table">
        <TableHeader>
          <TableColumn className="text-center">#</TableColumn>
          <TableColumn className="text-center">Name</TableColumn>
          <TableColumn className="text-center">Username</TableColumn>
          <TableColumn className="text-center">Email</TableColumn>
          <TableColumn className="text-center">Status</TableColumn>
          <TableColumn className="text-center">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className="text-center">{(page - 1) * rowsPerPage + index + 1}</TableCell>
              <TableCell className="text-center">{user.name}</TableCell>
              <TableCell className="text-center">{user.username}</TableCell>
              <TableCell className="text-center">{user.email}</TableCell>
              <TableCell className="text-center">
                <Chip color={user.active ? "success" : "danger"} variant="flat">
                  {user.active ? 'ACTIVE' : 'INACTIVE'}
                </Chip>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex gap-2 items-center justify-center">
                  <Button
                    isIconOnly
                    color="primary"
                    variant="light"
                    onPress={() => handleEdit(user)}
                  >
                    <i className="fas fa-edit" />
                  </Button>
                  <Button
                    isIconOnly
                    color="danger"
                    variant="light"
                    onPress={() => handleDelete(user)}
                  >
                    <i className="fas fa-trash" />
                  </Button>
                  {/* Switch para activar/desactivar */}
                  <Switch 
                    defaultSelected 
                    checked={user.active}
                    onChange={() => toggleActive(user)} 
                    color="primary"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4">
        <Pagination total={pages} color="primary" page={page} onChange={setPage} />
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent className="w-full max-w-4xl">
          <ModalHeader>{selectedUser ? 'Edit User' : 'Add User'}</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  label="Name"
                  placeholder="Enter name"
                  labelPlacement="outside"
                  startContent={<i className="text-customBlue pe-2 border-e-2 fas fa-user" />}
                  {...register("name", {
                    required: "Name is required.",
                  })}
                  isInvalid={isSubmitted && !!errors.name}
                  errorMessage={errors.name?.message}
                />
              </div>

              <div>
                <Input
                  label="Username"
                  placeholder="Enter username"
                  labelPlacement="outside"
                  startContent={<i className="text-customBlue pe-2 border-e-2 fas fa-user" />}
                  {...register("username", {
                    required: "Username is required.",
                  })}
                  isInvalid={isSubmitted && !!errors.username}
                  errorMessage={errors.username?.message}
                />
              </div>

              <div>
                <Input
                  label="Email"
                  placeholder="Enter email"
                  labelPlacement="outside"
                  startContent={<i className="text-customBlue pe-2 border-e-2 fas fa-envelope" />}
                  {...register("email", {
                    required: "Email is required.",
                  })}
                  isInvalid={isSubmitted && !!errors.email}
                  errorMessage={errors.email?.message}
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleSubmit(onSubmit)}>
              {selectedUser ? 'Update' : 'Add'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
