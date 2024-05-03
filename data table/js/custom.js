// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons:['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove']
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
// });

// final code below

// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
//                     doc.textCenter;
//                     doc.defaultStyle.fontSize = 13;
                    
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
    
// });






// 


//  secode final code for manpower

// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
//                     doc.defaultStyle.fontSize =14;
                   

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                         // doc.styles.tableBody.border = '1px solid #000'; // Add table borders
//                     });
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });
//  Final Code Add here

// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 1; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center'
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });



// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 1; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center'
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     // Update month automatically
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth() + 1; // January is 0

//     if (currentMonth === 4) {
//         // Update the month name for all rows
//         table.column(6).nodes().to$().text('April');
//     }

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });

// final Code 


// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 1; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center'
//                 }
//             }, 
//             'print', 
//             {
//                 text: 'Change Month',
//                 action: function(e, dt, node, config) {
//                     var selectedMonth = prompt("Enter the month (e.g., January, February, etc.):");
//                     if (selectedMonth) {
//                         // Update the month name for all rows
//                         table.column(6).nodes().to$().text(selectedMonth);
//                     }
//                 }
//             },
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     // Update month automatically
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth() + 1; // January is 0

//     if (currentMonth === 4) {
//         // Update the month name for all rows
//         table.column(6).nodes().to$().text('April');
//     }

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });





// final code 


$(document).ready(function() {
    var table = $('#example').DataTable({
        buttons: [
            'copy', 
            'csv', 
            'excel', 
            {
                extend: 'pdf',
                customize: function (doc) {
                    // Change page size and orientation to A3
                    doc.pageOrientation = 'landscape';
                    doc.pageSize = 'A3';
                    doc.defaultStyle.fontSize = 11; 

                    // Apply text-center class to 9th and 10th columns in PDF
                    doc.content[1].table.body.forEach(function(row) {
                        row[8].alignment = 'center'; // 9th column alignment
                        row[9].alignment = 'center'; // 10th column alignment
                    });

                    // Increase font size for tbody (body)
                    doc.content[1].table.body.forEach(function(row) {
                        row.forEach(function(cell) {
                            cell.fontSize = 11;
                        });
                    });

                    // Get the updated month name from the table
                    var updatedMonth = $('#example tbody tr:first-child td:nth-child(7)').text();

                    // Update month name in PDF, excluding the header rows
                    doc.content[1].table.body.forEach(function(row, index) {
                        if (index >= doc.content[1].table.headerRows) {
                            row[6].text = updatedMonth;
                        }
                    });
                }
            }, 
            'print', 
            {
                text: 'Change Month',
                action: function(e, dt, node, config) {
                    var selectedMonth = prompt("Enter the month (e.g., January, February, etc.):");
                    if (selectedMonth) {
                        // Update the month name for all rows
                        table.column(6).nodes().to$().text(selectedMonth);
                        // Redraw the DataTable to reflect the changes
                        table.draw();
                    }
                }
            },
            'add', 
            'remove'
        ],
        columnDefs: [
            { targets: 9, className: 'dt-wrap' } // Enable text wrapping for column 10
        ]
    });

    // Apply text-center class to 9th column
    table.column(8).nodes().to$().addClass('text-center');

    // Update month automatically to current month
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentDate = new Date();
    var currentMonthIndex = currentDate.getMonth();
    var currentMonth = months[currentMonthIndex];

    // Update the month name for all rows
    table.column(6).nodes().to$().text(currentMonth);

    // Redraw the DataTable to reflect the changes
    table.draw();

    table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
});

// 

// clear



  
    


