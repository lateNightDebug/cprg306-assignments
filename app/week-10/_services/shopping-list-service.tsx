import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId: string) => {
  console.log("getItems called", "passed user ID value", userId)
  const itemsCollectionRef = collection(db, 'users', userId, 'items');

  try {

    const querySnapshot = await getDocs(itemsCollectionRef);

    const items: { id: string; }[] = [];
    
    // Iterate over the documents and build the items array
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return items;
  } catch (error) {
    console.error("Error getting user items: ", error);
    throw error; // Rethrow the error or handle it as needed
  }
};
/**
 * Adds a new item to a specific user's 'items' subcollection.
 * @param {string} userId The ID of the user.
 * @param {object} item The data for the new item.
 * @returns {Promise<string>} The ID of the newly created document.
 */
export async function addItem(userId: string, item: object) {
  try {
    console.log("user ID: ", userId, "item: ", item)
    // 1. Create a reference to the 'items' subcollection for the specific user
    const itemsCollectionRef = collection(db, 'users', userId, 'items');

    // 2. Add the new item document to the subcollection
    // Firestore automatically generates a unique ID
    const docRef = await addDoc(itemsCollectionRef, item);

    // 3. The docRef object contains the auto-generated ID
    console.log("Document written with ID: ", docRef.id);

    // 4. Return the new document's ID
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e; // Re-throw the error for upstream handling
  }
};
