export default function DivorceItem({ celebrity1, celebrity2, reason }) {
    return (
      <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md m-2 w-full">
        <h2 className="text-xl font-bold">
          {celebrity1} & {celebrity2}
        </h2>
        <p className="text-gray-700 mt-1">Reason: {reason}</p>
      </div>
    );
  }
  