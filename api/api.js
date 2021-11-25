import axios from "axios";

const CatalogApi = {
    async getCatalog(path, metaPath, brands, price) {

        let URL
        if (path)
            URL = `https://getlens-master.stage.dev.family/api/pages/${path}`
        else if (brands.length && brands.length !== 2 && price)
            URL = `${metaPath}?brands[]=${brands}&price[min]=${price.min}&price[max]=${price.max}`
        else if (brands.length && brands.length !== 2)
            URL = `${metaPath}?brands[]=${brands[0]}`
        else if (price)
            URL = `${metaPath}?price[min]=${price.min}&price[max]=${price.max}`
        else
            URL = metaPath

        const result = await axios.get(URL);

        return result;
    },
};

export default CatalogApi