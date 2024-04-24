import { Tab, Tabs } from "@nextui-org/react";
import { ItemTrabajo } from "./ItemTrabajo";

export const TabsTrabajos = ({ myProyects }) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Tabs className="mb-8" aria-label="Options">
        <Tab key="photos" title="Todo">
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {myProyects.map((item,index) => (
              <ItemTrabajo
              key={index}
              color={item.color}
                titulo={item.titulo}
                descripcion={item.descripcion}
                link={item.link}
                imagen={item.imagen}
              />
            ))}
          </div>
        </Tab>
        <Tab key="music" title="Full-Stack">
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {myProyects.map(
              (item,index) =>
                item.tipo === "full-stack" && (
                  <ItemTrabajo
                  key={index}
                    color={item.color}
                    titulo={item.titulo}
                    descripcion={item.descripcion}
                    link={item.link}
                    imagen={item.imagen}
                  />
                )
            )}
          </div>
        </Tab>
        <Tab key="videos" title="Front-End">
          <div className="bg-white grid grid-cols-2 lg:grid-cols-3 gap-12">
            {myProyects.map(
              (item,index) =>
                item.tipo === "front-end" && (
                  <ItemTrabajo
                  key={index}
                  color={item.color}
                    titulo={item.titulo}
                    descripcion={item.descripcion}
                    link={item.link}
                    imagen={item.imagen}
                  />
                )
            )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
