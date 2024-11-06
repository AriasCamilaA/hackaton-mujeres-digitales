import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import useUsers from "../../../hooks/useUsers";

const UsersList = () => {
  const { users, loading, error } = useUsers(); // Obtener los usuarios del hook

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error al cargar usuarios: {error}</p>;

  return (
    <div className="flex flex-wrap gap-4">
      {users.map((user) => {
        const [firstName, lastName] = user.name.split(" "); // Obtener nombre y apellido
        const avatarText = `${firstName[0]}${lastName[0]}`.toUpperCase(); // Primeras letras del nombre y apellido

        return (
          <Card key={user.id} className="max-w-[340px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  color="primary" // Puedes cambiar el color según lo necesites
                >
                  {avatarText}
                </Avatar>
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">{user.name}</h4>
                  <h5 className="text-small tracking-tight text-default-400">@{user.username}</h5>
                </div>
              </div>
              <Button color="primary" radius="full" size="sm" variant="solid">
                Follow
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>Email: {user.email}</p>
              <p>Teléfono: {user.phone}</p>
              <p>Dirección: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
              <p>Compañía: {user.company.name}</p>
              <p>Frase de la compañía: {user.company.catchPhrase}</p>
              <p>Sitio web: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">{user.followingCount || 0}</p>
                <p className="text-default-400 text-small">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">{user.followersCount || 0}</p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default UsersList;
