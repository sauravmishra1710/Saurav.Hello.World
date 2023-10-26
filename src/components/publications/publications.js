import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './publications.css'

//nested data is ok, see accessorKeys in ColumnDef below
const journals = [
  {
    slNo: 1,
    title: 'A Comparative Study for Time-to-Event Analysis and Survival Prediction for Heart Failure Condition using Machine Learning Techniques.',
    publishedOn: 'July 2022',
    jName: <a href="https://jeeemi.org/index.php/jeeemi/issue/view/12" target="_blank">Journal of Electronics, Electromedical Engineering, and Medical Informatics Vol: 4, No: 3</a>,
    linkToPdf: <a href="https://jeeemi.org/index.php/jeeemi/article/view/225/94" target="_blank">Read Paper Online</a>,
    codeRepo: <a href="https://github.com/sauravmishra1710/Heart-Failure-Condition-And-Survival-Analysis" target="_blank">Source Code</a>,
  },
  {
    slNo: 2,
    title: ' Artificial Intelligence: A Review of Progress and Prospects in Medicine and Healthcare.',
    publishedOn: 'January 2022',
    jName: <a href="https://jeeemi.org/index.php/jeeemi/issue/view/9" target="_blank">Journal of Electronics, Electromedical Engineering, and Medical Informatics Vol: 4, No: 1</a>,
    linkToPdf: <a href="https://jeeemi.org/index.php/jeeemi/article/view/180/80" target="_blank">Read Paper Online</a>,
    codeRepo: 'NA - This is a review paper.',
  },
  {
    slNo: 3,
    title: 'A Comparative Study for Time-to-Event Analysis and Survival Prediction for Heart Failure Condition using Machine Learning Techniques.',
    publishedOn: 'October 2021',
    jName: <a href="https://jeeemi.org/index.php/jeeemi/issue/view/10" target="_blank">Journal of Electronics, Electromedical Engineering, and Medical Informatics Vol: 3, No: 3</a>,
    linkToPdf: <a href="https://jeeemi.org/index.php/jeeemi/article/view/147/75" target="_blank">Read Paper Online</a>,
    codeRepo: <a href="https://github.com/sauravmishra1710/Malaria-Detection-Using-Deep-Learning-Techniques" target="_blank">Source Code</a>,
  },
];

const Publications = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'slNo',
        header: 'Sl No.',
        size: 150,
      },
      {
        accessorKey: 'title',
        header: 'Paper Title',
        size: 150,
      },
      {
        accessorKey: 'publishedOn',
        header: 'Published On',
        size: 150,
      },
      {
        accessorKey: 'jName',
        header: 'Journal Name',
        size: 200,
      },
      {
        accessorKey: 'linkToPdf',
        header: 'Paper Link',
        size: 200,
      },
      {
        accessorKey: 'codeRepo',
        header: 'Code Repository',
        size: 200,
      },
    ],
    [],
  );

  return (
    <>
    <div className='publications'>
        <h2> Peer Reviewed Publications </h2>
        <MaterialReactTable 
        columns={columns} 
        data={journals} 
        enableSorting={false}
        enableFilters={false}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        enableColumnResizing={false}
        // enableClickToCopy
        renderRowActionMenuItems={() => [<MenuItem>Test</MenuItem>]} muiTableBodyRowProps={{
            onClick: () => {
              alert('row click');
            }
          }}
        />
    </div>
    </>
  );
};

export default Publications;
