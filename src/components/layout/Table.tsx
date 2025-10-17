type Column = {
  key: string;
  header: string;
};

type TableProps = {
  columns: Column[];
  data: Record<string, any>[];
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="min-w-full font-inter">
      <thead className="bg-[#F9FAFB] border-b border-b-[#EAECF0]">
        <tr>
          {columns.map((col, index: number) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-sm font-medium text-[#667085]"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {(data ?? []).length === 0 && (
          <tr className="text-sm text-gray-800  text-center">
            <td colSpan={columns.length} className="px-6 py-4 text-sm text-gray-800">
              No data available.
            </td>
          </tr>
        )}
        {(data ?? []).map((row, index) => (
          <tr key={index} className="hover:bg-gray-50">
            {columns.map((col, index: number) => (
              <td key={index} className="px-6 py-3 text-sm text-gray-800">
                {col.key === "actions" ? (
                  <div>
                    <button className="px-3 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="px-3 py-1 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                ) : (
                  row[col.key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
