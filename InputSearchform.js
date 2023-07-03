let dataArray = [];

    function createTable() {
      const arrayInput = document.getElementById('arrayInput').value;
      dataArray = arrayInput.split(',');

      const table = document.getElementById('resultTable');
      table.innerHTML = '';

      const headerRow = table.insertRow();
      const headerCell = headerRow.insertCell();
      headerCell.innerText = 'Elements';

      for (let i = 0; i < dataArray.length; i++) {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.innerText = dataArray[i];
      }
    }


    
    function searchTable() {
      const searchInput = document.getElementById('searchInput').value.toLowerCase();
      const table = document.getElementById('resultTable');
      const rows = table.getElementsByTagName('tr');

      for (let i = 1; i < rows.length; i++) {
        const element = rows[i].getElementsByTagName('td')[0];
        if (element.innerText.toLowerCase().includes(searchInput)) {
          rows[i].style.display = '';
        } else {
          rows[i].style.display = 'none';
        }
      }
    }


