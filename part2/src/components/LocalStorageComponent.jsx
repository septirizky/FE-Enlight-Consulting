import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageComponent = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">LocalStorage Example</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="p-2 border border-gray-300 rounded w-full mb-4"
      />
      <p>
        Name from LocalStorage: <span className="font-semibold">{name}</span>
      </p>
    </div>
  );
};

export default LocalStorageComponent;
