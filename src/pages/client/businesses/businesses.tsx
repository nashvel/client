import React, { useState } from "react";
import Breadcrumb from "../../../components/breadcrums";
import Header from "../../../layouts/header";
import Sidemenu from "../../../layouts/sidemenu";
import { Trash, Pencil, } from "react-bootstrap-icons";

interface FoodItem {
  name: string;
  price: number;
  discount?: string; // Optional promotion field
}

const initialMenu: FoodItem[] = [
  { name: "Kimbap", price: 170 },
  { name: "Tteokbokki", price: 189 },
  { name: "Tuna Bake Sushi", price: 199 },
  { name: "Bibimbap", price: 170 },
  { name: "Kimchi", price: 170 },
  { name: "Jjangmyeong", price: 170 },
  { name: "Beef Bulgogi", price: 189 },
  { name: "Kimchi Jiggae", price: 199 },
  { name: "Yangnyeom", price: 179 },
];

const ManageMenu: React.FC = () => {
  const [menu, setMenu] = useState<FoodItem[]>(initialMenu);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newFood, setNewFood] = useState<FoodItem>({ name: "", price: 0, discount: "" });

  const handleAddFood = () => {
    if (!newFood.name || newFood.price <= 0) return;
    setMenu([...menu, newFood]);
    setNewFood({ name: "", price: 0, discount: "" });
  };

  const handleDeleteFood = (index: number) => {
    setMenu(menu.filter((_, i) => i !== index));
  };

  const handleEditFood = (index: number) => {
    setEditingIndex(index);
    setNewFood(menu[index]);
  };

  const handleSaveEdit = () => {
    if (editingIndex !== null) {
      const updatedMenu = [...menu];
      updatedMenu[editingIndex] = newFood;
      setMenu(updatedMenu);
      setEditingIndex(null);
      setNewFood({ name: "", price: 0, discount: "" });
    }
  };

  return (
    <>
      <Header />
      <Sidemenu />
      <div
        className="main-content app-content fixed inset-0 flex flex-col justify-start pt-12"
        style={{
          background: "linear-gradient(135deg, #fff5f5, #f8e1e7, #e3f2fd, #d1c4e9)",
          minHeight: "100vh",
          padding: "10px",
        }}
      >
        <div className="container-fluid mt-10">
          <Breadcrumb title="Manage Menu" active="Menu" />
          <div className="flex justify-center">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-4 rounded-lg bg-white shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-center">Manage Menu</h3>

              {/* Add or Edit Food Form */}
              <div className="mb-4 p-4 bg-gray-100 rounded-lg">
                <h4 className="text-md font-semibold mb-2">{editingIndex !== null ? "Edit Food" : "Add New Food"}</h4>
                <input
                  type="text"
                  placeholder="Food Name"
                  className="w-full p-2 mb-2 border rounded"
                  value={newFood.name}
                  onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full p-2 mb-2 border rounded"
                  value={newFood.price}
                  onChange={(e) => setNewFood({ ...newFood, price: parseFloat(e.target.value) })}
                />
                <input
                  type="text"
                  placeholder="Discount (Optional)"
                  className="w-full p-2 mb-2 border rounded"
                  value={newFood.discount}
                  onChange={(e) => setNewFood({ ...newFood, discount: e.target.value })}
                />
                <button
                  onClick={editingIndex !== null ? handleSaveEdit : handleAddFood}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {editingIndex !== null ? "Save Changes" : "Add Food"}
                </button>
              </div>

              {/* Food List */}
              <div className="border p-4 rounded-lg">
                <h4 className="text-md font-semibold mb-2">Menu List</h4>
                {menu.length > 0 ? (
                  menu.map((food, index) => (
                    <div key={index} className="flex justify-between items-center p-2 border-b">
                      <div>
                        <span className="font-semibold">{food.name}</span> - {food.price} PHP
                        {food.discount && <span className="text-red-500 ml-2">({food.discount})</span>}
                      </div>
                      <div className="flex space-x-2">
                        <button onClick={() => handleEditFood(index)} className="text-yellow-500 hover:text-yellow-700">
                          <Pencil size={18} />
                        </button>
                        <button onClick={() => handleDeleteFood(index)} className="text-red-500 hover:text-red-700">
                          <Trash size={18} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center">No food items available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageMenu;
