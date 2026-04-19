const TableRow = ({ label, link = null, value = null, format = (x) => x }) => (
  <tr>
    <td width="70%">{label}</td>
    <td>{link ? <a href={link}>{format(value)}</a> : format(value)}</td>
  </tr>
);

export default TableRow;
