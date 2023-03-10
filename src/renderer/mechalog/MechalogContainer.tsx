import { useGetMechalogQuery } from "../store/CommunicationAPI";

export const MechalogContainer = () => {
  const { data } = useGetMechalogQuery();
  return (
    <>
      <div>{data && data.length}</div>
      <div>
        <pre>{data && JSON.stringify(data[0], null, 2)}</pre>
      </div>
    </>
  );
};
