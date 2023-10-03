function sortTables() {
  var tables = document.getElementsByTagName('table');
  for (var i = 0; i < tables.length; i++) {
    sortTable(tables[i]);
  }
}

function sortTable(table) {
  var rows = table.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {
    sortRow(rows[i]);
  }
}

function sortRow(row) {
  var cells = row.getElementsByTagName('td');
  for (var i = 0; i < cells.length; i++) {
    sortCell(cells[i]);
  }
}

function sortCell(cell) {
  var cellText = cell.textContent;
  cell.textContent = '';
  cell.appendChild(document.createTextNode(cellText));

  var childNodes = cell.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    sortNode(childNodes[i]);
  }
}

function sortNode(node) {
  var nodeText = node.textContent;
  node.textContent = '';
  node.appendChild(document.createTextNode(nodeText));
}
