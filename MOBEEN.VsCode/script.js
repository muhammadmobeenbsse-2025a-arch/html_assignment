<input type="text" id="teamSearch" onkeyup="filterTable()" placeholder="Search for teams..." style="margin-bottom: 10px; padding: 8px; width: 100%; border: 1px solid #ddd; border-radius: 4px;">

<table id="pslTable" border="1" cellpadding="10" style="border-collapse: collapse; width: 100%; text-align: left;">
    <thead>
        <tr style="background-color: #f2f2f2; cursor: pointer;">
            <th onclick="sortTable(0)">Team ↕</th>
            <th onclick="sortTable(1)">Wins ↕</th>
            <th onclick="sortTable(2)">Losses ↕</th>
            <th onclick="sortTable(3)">Points ↕</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Multan Sultans</td><td>7</td><td>3</td><td>14</td></tr>
        <tr><td>Peshawar Zalmi</td><td>6</td><td>3</td><td>13</td></tr>
        <tr><td>Islamabad United</td><td>5</td><td>4</td><td>11</td></tr>
        <tr><td>Quetta Gladiators</td><td>5</td><td>4</td><td>11</td></tr>
        <tr><td>Karachi Kings</td><td>4</td><td>6</td><td>8</td></tr>
        <tr><td>Lahore Qalandars</td><td>1</td><td>8</td><td>3</td></tr>
    </tbody>
</table>
