import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function randerCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>; 
}

function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={randerCategoryItem}
            numColumns={2} />
    )
}

export default CategoriesScreen;