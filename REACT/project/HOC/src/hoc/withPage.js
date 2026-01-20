const withPage = (WarpComponent,pageName)=>{

    return ()=>{
        return (<>
        <WarpComponent PageName={pageName}/>
        </>)
    }

}

export default withPage