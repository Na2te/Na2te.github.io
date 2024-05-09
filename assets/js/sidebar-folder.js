
function spread(count){
    document.getElementById('folder-checkbox-' + count).checked =
        !document.getElementById('folder-checkbox-' + count).checked;
    document.getElementById('spread-icon-' + count).innerHTML =
        document.getElementById('spread-icon-' + count).innerHTML == 'arrow_drop_down' ?
            'arrow_right' : 'arrow_drop_down';
}

function unspread(cnt){
    document.getElementById('folder-checkbox-' + cnt).checked =
        !document.getElementById('folder-checkbox-' + cnt).checked
    document.getElementById('spread-icon-' + cnt).innerHTML =
        document.getElementById('spread-icon-' + cnt).innerHTML == 'arrow_right' ?
            'arrow_drop_down' : 'arrow_right'
}

