import { useEffect } from "react";

const PageTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-phone corner`;
    }, [title])
};

export default PageTitle;





