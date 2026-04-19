import TableRow from './TableRow';

const Table = ({ data }) => (
  <table>
    <tbody>
      {data.map((pair) => (
        <TableRow
          format={pair.format}
          key={pair.label}
          label={pair.label}
          link={pair.link}
          value={pair.value}
        />
      ))}
    </tbody>
  </table>
);

export default Table;
