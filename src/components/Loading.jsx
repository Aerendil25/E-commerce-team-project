import { useGlobal } from "../context/GlobalContext";

function Loading() {
  const { isLoading } = useGlobal();
  return (
    isLoading && (
      <div class="page-loading">
        <h2>Loading...</h2>
      </div>
    )
  );
}

export default Loading;
