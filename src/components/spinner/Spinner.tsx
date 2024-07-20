import GridLoader from 'react-spinners/GridLoader'

const override = {
    display: 'block',
    margin: '100px auto'
}

const Spinner = ({loading}:any) => {
    return (
        <>
         <GridLoader
            color='#4338ca'
            loading={loading}
            cssOverride={override}
            size={150}
         />
        </>
    );
}


export default Spinner;