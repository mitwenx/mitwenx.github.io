
        // Food database (you can add more items here)
        const foodDatabase = [
     
     
  {"name": "Aloo Paratha", "calories": 220, "sodium": 400, "carbs": 35, "sugar": 1, "protein": 5, "fat": 8, "vitaminC": 10},
  {"name": "Dal Makhani", "calories": 180, "sodium": 500, "carbs": 20, "sugar": 2, "protein": 8, "fat": 9, "vitaminC": 5},
  {"name": "Chicken Biryani", "calories": 240, "sodium": 600, "carbs": 30, "sugar": 1, "protein": 12, "fat": 10, "vitaminC": 3},
  {"name": "Paneer Tikka", "calories": 260, "sodium": 450, "carbs": 10, "sugar": 2, "protein": 14, "fat": 20, "vitaminC": 15},
  {"name": "Roti", "calories": 120, "sodium": 200, "carbs": 25, "sugar": 0, "protein": 3, "fat": 1, "vitaminC": 0},
  {"name": "Chole Bhature", "calories": 300, "sodium": 700, "carbs": 40, "sugar": 2, "protein": 8, "fat": 12, "vitaminC": 8},
  {"name": "Samosa", "calories": 260, "sodium": 500, "carbs": 30, "sugar": 1, "protein": 4, "fat": 15, "vitaminC": 5},
  {"name": "Idli", "calories": 70, "sodium": 150, "carbs": 15, "sugar": 0, "protein": 2, "fat": 0.5, "vitaminC": 0},
  {"name": "Dosa", "calories": 80, "sodium": 200, "carbs": 16, "sugar": 0, "protein": 2, "fat": 1, "vitaminC": 0},
  {"name": "Pav Bhaji", "calories": 200, "sodium": 600, "carbs": 30, "sugar": 3, "protein": 5, "fat": 8, "vitaminC": 20},
  {"name": "Butter Chicken", "calories": 280, "sodium": 650, "carbs": 10, "sugar": 3, "protein": 18, "fat": 20, "vitaminC": 10},
  {"name": "Rajma", "calories": 130, "sodium": 400, "carbs": 20, "sugar": 1, "protein": 7, "fat": 2, "vitaminC": 5},
  {"name": "Palak Paneer", "calories": 200, "sodium": 500, "carbs": 10, "sugar": 2, "protein": 12, "fat": 15, "vitaminC": 25},
  {"name": "Vada Pav", "calories": 250, "sodium": 550, "carbs": 35, "sugar": 2, "protein": 5, "fat": 10, "vitaminC": 8},
  {"name": "Tandoori Chicken", "calories": 220, "sodium": 600, "carbs": 5, "sugar": 1, "protein": 20, "fat": 12, "vitaminC": 5},
  {"name": "Pulao", "calories": 150, "sodium": 300, "carbs": 30, "sugar": 1, "protein": 3, "fat": 3, "vitaminC": 5},
  {"name": "Naan", "calories": 300, "sodium": 500, "carbs": 50, "sugar": 2, "protein": 6, "fat": 8, "vitaminC": 0},
  {"name": "Biryani (Vegetable)", "calories": 180, "sodium": 450, "carbs": 35, "sugar": 2, "protein": 4, "fat": 5, "vitaminC": 10},
  {"name": "Masala Dosa", "calories": 120, "sodium": 300, "carbs": 20, "sugar": 1, "protein": 3, "fat": 4, "vitaminC": 5},
  {"name": "Aloo Gobi", "calories": 130, "sodium": 350, "carbs": 15, "sugar": 2, "protein": 3, "fat": 6, "vitaminC": 30},
  {"name": "Bhindi Masala", "calories": 100, "sodium": 300, "carbs": 10, "sugar": 2, "protein": 2, "fat": 6, "vitaminC": 15},
  {"name": "Kadhi Pakora", "calories": 160, "sodium": 500, "carbs": 15, "sugar": 2, "protein": 5, "fat": 10, "vitaminC": 5},
  {"name": "Fish Curry", "calories": 200, "sodium": 550, "carbs": 5, "sugar": 1, "protein": 15, "fat": 14, "vitaminC": 8},
  {"name": "Prawn Masala", "calories": 180, "sodium": 600, "carbs": 5, "sugar": 1, "protein": 16, "fat": 12, "vitaminC": 10},
  {"name": "Mutton Rogan Josh", "calories": 250, "sodium": 700, "carbs": 5, "sugar": 1, "protein": 20, "fat": 18, "vitaminC": 5},
  {"name": "Upma", "calories": 100, "sodium": 250, "carbs": 20, "sugar": 1, "protein": 3, "fat": 2, "vitaminC": 5},
  {"name": "Poori", "calories": 200, "sodium": 300, "carbs": 25, "sugar": 0, "protein": 3, "fat": 10, "vitaminC": 0},
  {"name": "Aloo Tikki", "calories": 150, "sodium": 400, "carbs": 20, "sugar": 1, "protein": 3, "fat": 7, "vitaminC": 10},
  {"name": "Methi Paratha", "calories": 180, "sodium": 350, "carbs": 30, "sugar": 1, "protein": 5, "fat": 6, "vitaminC": 15},
  {"name": "Chicken Korma", "calories": 270, "sodium": 650, "carbs": 10, "sugar": 2, "protein": 18, "fat": 20, "vitaminC": 5},
  {"name": "Paneer Butter Masala", "calories": 280, "sodium": 600, "carbs": 10, "sugar": 3, "protein": 12, "fat": 22, "vitaminC": 10},
  {"name": "Dal Tadka", "calories": 150, "sodium": 450, "carbs": 20, "sugar": 1, "protein": 8, "fat": 5, "vitaminC": 5},
  {"name": "Gobi Manchurian", "calories": 200, "sodium": 700, "carbs": 25, "sugar": 3, "protein": 4, "fat": 10, "vitaminC": 20},
  {"name": "Rasam", "calories": 50, "sodium": 300, "carbs": 10, "sugar": 1, "protein": 2, "fat": 1, "vitaminC": 10},
  {"name": "Sambar", "calories": 80, "sodium": 350, "carbs": 15, "sugar": 2, "protein": 3, "fat": 2, "vitaminC": 15},
  {"name": "Keema Matar", "calories": 240, "sodium": 600, "carbs": 10, "sugar": 2, "protein": 18, "fat": 16, "vitaminC": 10},
  {"name": "Baingan Bharta", "calories": 120, "sodium": 400, "carbs": 15, "sugar": 3, "protein": 2, "fat": 6, "vitaminC": 10},
  {"name": "Kheer", "calories": 200, "sodium": 50, "carbs": 35, "sugar": 20, "protein": 5, "fat": 5, "vitaminC": 0},
  {"name": "Gulab Jamun", "calories": 300, "sodium": 100, "carbs": 50, "sugar": 40, "protein": 3, "fat": 10, "vitaminC": 0},
  {"name": "Jalebi", "calories": 350, "sodium": 150, "carbs": 60, "sugar": 45, "protein": 2, "fat": 15, "vitaminC": 0},
  {"name": "Lassi (Sweet)", "calories": 150, "sodium": 100, "carbs": 20, "sugar": 18, "protein": 5, "fat": 5, "vitaminC": 2},
  {"name": "Pani Puri", "calories": 100, "sodium": 300, "carbs": 15, "sugar": 1, "protein": 2, "fat": 4, "vitaminC": 5},
  {"name": "Bhel Puri", "calories": 150, "sodium": 400, "carbs": 25, "sugar": 2, "protein": 3, "fat": 5, "vitaminC": 10},
  {"name": "Sev Puri", "calories": 180, "sodium": 450, "carbs": 25, "sugar": 2, "protein": 3, "fat": 8, "vitaminC": 8},
  {"name": "Dahi Vada", "calories": 160, "sodium": 350, "carbs": 20, "sugar": 2, "protein": 6, "fat": 8, "vitaminC": 5},
  {"name": "Pakora", "calories": 200, "sodium": 400, "carbs": 20, "sugar": 1, "protein": 4, "fat": 12, "vitaminC": 10},
  {"name": "Kachori", "calories": 250, "sodium": 500, "carbs": 30, "sugar": 1, "protein": 5, "fat": 15, "vitaminC": 5},
  {"name": "Pesarattu", "calories": 120, "sodium": 250, "carbs": 20, "sugar": 1, "protein": 5, "fat": 3, "vitaminC": 5},
  {"name": "Uttapam", "calories": 100, "sodium": 300, "carbs": 20, "sugar": 1, "protein": 3, "fat": 2, "vitaminC": 5},
  {"name": "Medu Vada", "calories": 150, "sodium": 350, "carbs": 20, "sugar": 0, "protein": 5, "fat": 7, "vitaminC": 0},
  {"name": "Chicken 65", "calories": 260,確定 "sodium": 700, "carbs": 10, "sugar": 1, "protein": 18, "fat": 18, "vitaminC": 5},
  {"name": "Matar Paneer", "calories": 220, "sodium": 500, "carbs": 15, "sugar": 3, "protein": 12, "fat": 15, "vitaminC": 15},
  {"name": "Shahi Paneer", "calories": 280, "sodium": 550, "carbs": 10, "sugar": 3, "protein": 14, "fat": 22, "vitaminC": 5},
  {"name": "Malai Kofta", "calories": 300, "sodium": 600, "carbs": 20, "sugar": 5, "protein": 10, "fat": 20, "vitaminC": 10},
  {"name": "Dum Aloo", "calories": 180, "sodium": 450, "carbs": 20, "sugar": 2, "protein": 3, "fat": 10, "vitaminC": 15},
  {"name": "Chana Masala", "calories": 150, "sodium": 500, "carbs": 25, "sugar": 2, "protein": 7, "fat": 3, "vitaminC": 10},
  {"name": "Aloo Matar", "calories": 140, "sodium": 400, "carbs": 20, "sugar": 2, "protein": 4, "fat": 5, "vitaminC": 20},
  {"name": "Vegetable Korma", "calories": 160, "sodium": 450, "carbs": 15, "sugar": 3, "protein": 4, "fat": 10, "vitaminC": 15},
  {"name": "Saag Aloo", "calories": 130, "sodium": 400, "carbs": 15, "sugar": 2, "protein": 3, "fat": 6, "vitaminC": 25},
  {"name": "Egg Curry", "calories": 180, "sodium": 500, "carbs": 10, "sugar": 2, "protein": 10, "fat": 12, "vitaminC": 10},
  {"name": "Goan Fish Curry", "calories": 200, "sodium": 600, "carbs": 5, "sugar": 1, "protein": 15, "fat": 14, "vitaminC": 8},
  {"name": "Lamb Vindaloo", "calories": 260, "sodium": 700, "carbs": 10, "sugar": 2, "protein": 20, "fat": 18, "vitaminC": 10},
  {"name": "Pongal", "calories": 120, "sodium": 250, "carbs": 20, "sugar": 1, "protein": 4, "fat": 4, "vitaminC": 0},
  {"name": "Kesari", "calories": 250, "sodium": 50, "carbs": 40, "sugar": 20, "protein": 3, "fat": 10, "vitaminC": 0},
  {"name": "Rasmalai", "calories": 280, "sodium": 100, "carbs": 35, "sugar": 30, "protein": 6, "fat": 12, "vitaminC": 0},
  {"name": "Mishti Doi", "calories": 150, "sodium": 80, "carbs": 20, "sugar": 18, "protein": 5, "fat": 5, "vitaminC": 2},
  {"name": "Barfi (Milk)", "calories": 300, "sodium": 50, "carbs": 40, "sugar": 35, "protein": 6, "fat": 12, "vitaminC": 0},
  {"name": "Peda", "calories": 320, "sodium": 60, "carbs": 40, "sugar": 35, "protein": 7, "fat": 14, "vitaminC": 0},
  {"name": "Laddu (Besan)", "calories": 350, "sodium": 50, "carbs": 45, "sugar": 30, "protein": 6, "fat": 18, "vitaminC": 0},
  {"name": "Halwa (Sooji)", "calories": 280, "sodium": 50, "carbs": 40, "sugar": 20, "protein": 4, "fat": 12, "vitaminC": 0},
  {"name": "Phirni", "calories": 200, "sodium": 50, "carbs": 30, "sugar": 20, "protein": 5, "fat": 8, "vitaminC": 0},
  {"name": "Shrikhand", "calories": 180, "sodium": 80, "carbs": 20, "sugar": 18, "protein": 6, "fat": 8, "vitaminC": 2},
  {"name": "Papdi Chaat", "calories": 200, "sodium": 450, "carbs": 25, "sugar": 2, "protein": 4, "fat": 10, "vitaminC": 5},
  {"name": "Dhokla", "calories": 100, "sodium": 300, "carbs": 15, "sugar": 1, "protein": 4, "fat": 3, "vitaminC": 5},
  {"name": "Khandvi", "calories": 120, "sodium": 350, "carbs": 15, "sugar": 1, "protein": 5, "fat": 5, "vitaminC": 5},
  {"name": "Thepla", "calories": 150, "sodium": 300, "carbs": 20, "sugar": 1, "protein": 4, "fat": 6, "vitaminC": 5},
  {"name": "Patra", "calories": 130, "sodium": 400, "carbs": 20, "sugar": 2, "protein": 3, "fat": 5, "vitaminC": 10},
  {"name": "Fafda", "calories": 200, "sodium": 450, "carbs": 25, "sugar": 1, "protein": 5, "fat": 10, "vitaminC": 0},
  {"name": "Poha", "calories": 100, "sodium": 250, "carbs": 20, "sugar": 1, "protein": 2, "fat": 3, "vitaminC": 5},
  {"name": "Sabudana Khichdi", "calories": 200, "sodium": 300, "carbs": 40, "sugar": 1, "protein": 2, "fat": 5, "vitaminC": 5},
  {"name": "Misal Pav", "calories": 180, "sodium": 500, "carbs": 25, "sugar": 2, "protein": 6, "fat": 7, "vitaminC": 10},
  {"name": "Ragda Patties", "calories": 220, "sodium": 550, "carbs": 30, "sugar": 2, "protein": 6, "fat": 10, "vitaminC": 15},
  {"name": "Kathi Roll (Chicken)", "calories": 250, "sodium": 600, "carbs": 30, "sugar": 2, "protein": 15, "fat": 10, "vitaminC": 5},
  {"name": "Paneer Kathi Roll", "calories": 240, "sodium": 550, "carbs": 30, "sugar": 2, "protein": 12, "fat": 12, "vitaminC": 5},
  {"name": "Frankie (Veg)", "calories": 200, "sodium": 500, "carbs": 30, "sugar": 2, "protein": 5, "fat": 8, "vitaminC": 10},
  {"name": "Chicken Tikka Masala", "calories": 270, "sodium": 650, "carbs": 10, "sugar": 3, "protein": 18, "fat": 20, "vitaminC": 10},
  {"name": "Mutton Biryani", "calories": 260, "sodium": 600, "carbs": 30, "sugar": 1, "protein": 18, "fat": 12, "vitaminC": 5},
  {"name": "Prawn Biryani", "calories": 230, "sodium": 550, "carbs": 30, "sugar": 1, "protein": 15, "fat": 10, "vitaminC": 8},
  {"name": "Fish Fry", "calories": 220, "sodium": 500, "carbs": 5, "sugar": 0, "protein": 18, "fat": 15, "vitaminC": 5},
  {"name": "Chettinad Chicken", "calories": 250, "sodium": 700, "carbs": 5, "sugar": 1, "protein": 20, "fat": 18, "vitaminC": 5},
  {"name": "Hyderabadi Biryani", "calories": 240, "sodium": 600, "carbs": 30, "sugar": 1, "protein": 14, "fat": 10, "vitaminC": 5},
  {"name": "Kerala Fish Curry", "calories": 200, "sodium": 550, "carbs": 5, "sugar": 1, "protein": 15, "fat": 14, "vitaminC": 10},
  {"name": "Appam", "calories": 80, "sodium": 150, "carbs": 18, "sugar": 0, "protein": 2, "fat": 1, "vitaminC": 0},
  {"name": "Puttu", "calories": 100, "sodium": 100, "carbs": 20, "sugar": 0, "protein": 2, "fat": 1, "vitaminC": 0},
  {"name": "Parotta", "calories": 200, "sodium": 300, "carbs": 30, "sugar": 0, "protein": 4, "fat": 8, "vitaminC": 0},
  {"name": "Kozhukattai", "calories": 120, "sodium": 150, "carbs": 25, "sugar": 5, "protein": 2, "fat": 2, "vitaminC": 0},
  {"name": "Bisi Bele Bath", "calories": 150, "sodium": 400, "carbs": 25, "sugar": 1, "protein": 5, "fat": 5, "vitaminC": 5},
  {"name": "Vangi Bath", "calories": 140, "sodium": 350, "carbs": 25, "sugar": 1, "protein": 3, "fat": 4, "vitaminC": 5},
  {"name": "Puliyogare", "calories": 130, "sodium": 400, "carbs": 25, "sugar": 2, "protein": 3, "fat": 3, "vitaminC": 5},
  {"name": "Chicken Chettinad", "calories": 260, "sodium": 700, "carbs": 5, "sugar": 1, "protein": 20, "fat": 18, "vitaminC": 5},
  {"name": "Mutton Korma", "calories": 280, "sodium": 650, "carbs": 10, "sugar": 2, "protein": 20, "fat": 20, "vitaminC": 5},
  {"name": "Prawn Fry", "calories": 200, "sodium": 600, "carbs": 5, "sugar": 0, "protein": 18, "fat": 14, "vitaminC": 5},
  {"name": "Fish Tikka", "calories": 220, "sodium": 550, "carbs": 5, "sugar": 1, "protein": 20, "fat": 14, "vitaminC": 5},
  {"name": "Paneer Bhurji", "calories": 240, "sodium": 500, "carbs": 10, "sugar": 2, "protein": 14, "fat": 18, "vitaminC": 10},
  {"name": "Egg Bhurji", "calories": 180, "sodium": 450, "carbs": 5, "sugar": 1, "protein": 12, "fat": 14, "vitaminC": 5},
  {"name": "Aloo Bhindi", "calories": 120, "sodium": 350, "carbs": 15, "sugar": 2, "protein": 2, "fat": 6, "vitaminC": 20},
  {"name": "Lauki Sabzi", "calories": 80, "sodium": 300, "carbs": 10, "sugar": 2, "protein": 1, "fat": 4, "vitaminC": 15},
  {"name": "Tinda Masala", "calories": 90, "sodium": 350, "carbs": 10, "sugar": 2, "protein": 2, "fat": 5, "vitaminC": 10},
  {"name": "Arbi Fry", "calories": 150, "sodium": 300, "carbs": 20, "sugar": 1, "protein": 2, "fat": 7, "vitaminC": 5},
  {"name": "Karela Fry", "calories": 100, "sodium": 350, "carbs": 10, "sugar": 2, "protein": 2, "fat": 6, "vitaminC": 20},
  {"name": "Palak Dal", "calories": 130, "sodium": 400, "carbs": 20, "sugar": 1, "protein": 7, "fat": 3, "vitaminC": 25},
  {"name": "Moong Dal", "calories": 120, "sodium": 350, "carbs": 20, "sugar": 1, "protein": 7, "fat": 1, "vitaminC": 5},
  {"name": "Masoor Dal", "calories": 130, "sodium": 400, "carbs": 20, "sugar": 1, "protein": 8, "fat": 1, "vitaminC": 5},
  {"name": "Toor Dal", "calories": 120, "sodium": 350, "carbs": 20, "sugar": 1, "protein": 7, "fat": 1, "vitaminC": 5},
  {"name": "Urad Dal", "calories": 130, "sodium": 400, "carbs": 20, "sugar": 1, "protein": 8, "fat": 1, "vitaminC": 5},
  {"name": "Cholar Dal", "calories": 140, "sodium": 350, "carbs": 20, "sugar": 1, "protein": 7, "fat": 3, "vitaminC": 5},
  {"name": "Dal Fry", "calories": 150, "sodium": 450, "carbs": 20, "sugar": 1, "protein": 8, "fat": 5, "vitaminC": 5},
  {"name": "Aloo Jeera", "calories": 130, "sodium": 350, "carbs": 20, "sugar": 1, "protein": 2, "fat": 5, "vitaminC": 15},
  {"name": "Gobi Masala", "calories": 120, "sodium": 400, "carbs": 15, "sugar": 2, "protein": 3, "fat": 6, "vitaminC": 30},
  {"name": "Mushroom Masala", "calories": 110, "sodium": 400, "carbs": 10, "sugar": 2, "protein": 3, "fat": 6, "vitaminC": 5},
  {"name": "Corn Palak", "calories": 140, "sodium": 450, "carbs": 15, "sugar": 2, "protein": 4, "fat": 7, "vitaminC": 20},
  {"name": "Soya Chunk Curry", "calories": 150, "sodium": 500, "carbs": 10, "sugar": 1, "protein": 15, "fat": 5, "vitaminC": 5},
  {"name": "Jackfruit Curry", "calories": 120, "sodium": 350, "carbs": 20, "sugar": 3, "protein": 2, "fat": 4, "vitaminC": 10},
  {"name": "Raw Banana Fry", "calories": 130, "sodium": 300, "carbs": 25, "sugar": 2, "protein": 2, "fat": 3, "vitaminC": 10},
  {"name": "Yam Curry", "calories": 140, "sodium": 350, "carbs": 25, "sugar": 2, "protein": 2, "fat": 4, "vitaminC": 5},
  {"name": "Ridge Gourd Curry", "calories": 80, "sodium": 300, "carbs": 10, "sugar": 2, "protein": 1, "fat": 4, "vitaminC": 15},
  {"name": "Drumstick Curry", "calories": 90, "sodium": 350, "carbs": 10, "sugar": 2, "protein": 2, "fat": 4, "vitaminC": 20},
  {"name": "Brinjal Fry", "calories": 110, "sodium": 350, "carbs": 15, "sugar": 3, "protein": 2, "fat": 5, "vitaminC": 10},
  {"name": "Cabbage Sabzi", "calories": 80, "sodium": 300, "carbs": 10, "sugar": 2, "protein": 2, "fat": 4, "vitaminC": 25},
  {"name": "Beetroot Sabzi", "calories": 90, "sodium": 350, "carbs": 15, "sugar": 5, "protein": 2, "fat": 3, "vitaminC": 10},
  {"name": "Carrot Halwa", "calories": 250, "sodium": 50, "carbs": 35, "sugar": 20, "protein": 4, "fat": 12, "vitaminC": 5},
  {"name": "Pumpkin Curry", "calories": 100, "sodium": 350, "carbs": 15, "sugar": 3, "protein": 2, "fat": 4, "vitaminC": 15},
  {"name": "Mixed Veg Curry", "calories": 120, "sodium": 400, "carbs": 15, "sugar": 2, "protein": 3, "fat": 6, "vitaminC": 20},
  {"name": "Palak Corn", "calories": 140, "sodium": 450, "carbs": 15, "sugar": 2, "protein": 4, "fat": 7, "vitaminC": 25},
  {"name": "Methi Matar Malai", "calories": 200, "sodium": 500, "carbs": 15, "sugar": 3, "protein": 6, "fat": 14, "vitaminC": 15},
  {"name": "Paneer Pasanda", "calories": 280, "sodium": 550, "carbs": 10, "sugar": 3, "protein": 14, "fat": 22, "vitaminC": 5},
  {"name": "Chicken Saagwala", "calories": 240, "sodium": 600, "carbs": 10, "sugar": 2, "protein": 20, "fat": 15, "vitaminC": 25},
  {"name": "Mutton Keema", "calories": 250, "sodium": 650, "carbs": 5, "sugar": 1, "protein": 20, "fat": 18, "vitaminC": 5},
  {"name": "Prawn Korma", "calories": 220, "sodium": 600, "carbs": 10, "sugar": 2, "protein": 16, "fat": 15, "vitaminC": 5},
  {"name": "Fish Moilee", "calories": 200, "sodium": 550, "carbs": 5, "sugar": 1, "protein": 15, "fat": 14, "vitaminC": 5},
  {"name": "Egg Masala", "calories": 180, "sodium": 500, "carbs": 10, "sugar": 2, "protein": 10, "fat": 12, "vitaminC": 10},
  {"name": "Chicken Manchurian", "calories": 260, "sodium": 700, "carbs": 15, "sugar": 3, "protein": 18, "fat": 15, "vitaminC": 5},
  {"name": "Veg Manchurian", "calories": 180, "sodium": 650, "carbs": 25, "sugar": 3, "protein": 4, "fat": 8, "vitaminC": 15},
  {"name": "Chilli Chicken", "calories": 250, "sodium": 700, "carbs": 10, "sugar": 2, "protein": 18, "fat": 16, "vitaminC": 10},
  {"name": "Paneer Chilli", "calories": 240, "sodium": 650, "carbs": 15, "sugar": 2, "protein": 12, "fat": 16, "vitaminC": 15},
  {"name": "Hakka Noodles (Veg)", "calories": 200, "sodium": 600, "carbs": 35, "sugar": 2, "protein": 5, "fat": 6, "vitaminC": 10},
  {"name": "Chicken Fried Rice", "calories": 220, "sodium": 550, "carbs": 30, "sugar": 1, "protein": 10, "fat": 8, "vitaminC": 5},
  {"name": "Veg Fried Rice", "calories": 180, "sodium": 500, "carbs": 35, "sugar": 1, "protein": 4, "fat": 5, "vitaminC": 10},
  {"name": "Schezwan Chicken", "calories": 260, "sodium": 700, "carbs": 10, "sugar": 2, "protein": 18, "fat": 16, "vitaminC": 5},
  {"name": "Schezwan Noodles", "calories": 220, "sodium": 650, "carbs": 35, "sugar": 2, "protein": 6, "fat": 7, "vitaminC": 10},
  {"name": "Prawn Manchurian", "calories": 230, "sodium": 700, "carbs": 10, "sugar": 2, "protein": 16, "fat": 15, "vitaminC": 5},
  {"name": "Momos (Veg)", "calories": 150, "sodium": 400, "carbs": 25, "sugar": 1, "protein": 4, "fat": 5, "vitaminC": 5},
  {"name": "Momos (Chicken)", "calories": 180, "sodium": 450, "carbs": 20, "sugar": 1, "protein": 10, "fat": 8, "vitaminC": 5},
  {"name": "Spring Rolls (Veg)", "calories": 200, "sodium": 500, "carbs": 25, "sugar": 1, "protein": 4, "fat": 10, "vitaminC": 10},
  {"name": "Chicken Lollipop", "calories": 250, "sodium": 600, "carbs": 10, "sugar": 1, "protein": 18, "fat": 16, "vitaminC": 5},
  {"name": "Paneer Manchurian", "calories": 240, "sodium": 650, "carbs": 15, "sugar": 2, "protein": 12, "fat": 16, "vitaminC": 10},
  {"name": "Aloo Chaat", "calories": 150, "sodium": 400, "carbs": 20, "sugar": 1, "protein": 3, "fat": 7, "vitaminC": 15},
  {"name": "Dahi Puri", "calories": 180, "sodium": 450, "carbs": 25, "sugar": 2, "protein": 4, "fat": 8, "vitaminC": 5},
  {"name": "Ragda Puri", "calories": 200, "sodium": 500, "carbs": 30, "sugar": 2, "protein": 5, "fat": 8, "vitaminC": 10},
  {"name": "Samosa Chaat", "calories": 250, "sodium": 550, "carbs": 35, "sugar": 2, "protein": 5, "fat": 12, "vitaminC": 10},
  {"name": "Katori Chaat", "calories": 220, "sodium": 500, "carbs": 30, "sugar": 2, "protein": 5, "fat": 10, "vitaminC": 10},

     {
    name: "African Breadfruit",
    calories: 180,
    sodium: 5,
    carbs: 40,
    sugar: 10,
    protein: 5,
    fat: 1,
    vitaminC: 20
  },
  {
    name: "African Cherry Orange",
    calories: 47,
    sodium: 1,
    carbs: 12,
    sugar: 9,
    protein: 1,
    fat: 0.2,
    vitaminC: 50
  },
  {
    name: "African Custard Apple",
    calories: 94,
    sodium: 5,
    carbs: 23.6,
    sugar: 18,
    protein: 2.1,
    fat: 0.6,
    vitaminC: 36.3
  },
  {
    name: "African Mango",
    calories: 60,
    sodium: 1,
    carbs: 15,
    sugar: 14,
    protein: 0.8,
    fat: 0.4,
    vitaminC: 36.4
  },
  {
    name: "African Star Apple",
    calories: 67,
    sodium: 1,
    carbs: 16.8,
    sugar: 0,
    protein: 0.7,
    fat: 0.4,
    vitaminC: 14.7
  },
  {
    name: "Alligator Apple",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Amazon Grape",
    calories: 69,
    sodium: 2,
    carbs: 18,
    sugar: 16,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 3.2
  },
  {
    name: "American Mayapple",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Andean Blackberry",
    calories: 43,
    sodium: 1,
    carbs: 9.6,
    sugar: 4.3,
    protein: 1.4,
    fat: 0.5,
    vitaminC: 21
  },
  {
    name: "Annatto",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Araçá",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Australian Finger Lime",
    calories: 30,
    sodium: 2,
    carbs: 11,
    sugar: 1.7,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 29.1
  },
  {
    name: "Australian Round Lime",
    calories: 30,
    sodium: 2,
    carbs: 11,
    sugar: 1.7,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 29.1
  },
  {
    name: "Bacaba",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Beach Plum",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Beech Nut Fruit",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Betel Nut",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Bignonia Fruit",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Bilimbi",
    calories: 31,
    sodium: 2,
    carbs: 6.7,
    sugar: 3.9,
    protein: 1,
    fat: 0.3,
    vitaminC: 34.4
  },
  {
    name: "Biriba",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Black Apple",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Black Mulga Plum",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Black Raspberry",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Blackcurrant",
    calories: 63,
    sodium: 2,
    carbs: 15.4,
    sugar: 0,
    protein: 1.4,
    fat: 0.4,
    vitaminC: 181
  },
  {
    name: "Blue Tongue Fruit",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Bolwarra",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Brazilian Guava",
    calories: 68,
    sodium: 2,
    carbs: 14,
    sugar: 9,
    protein: 2.6,
    fat: 1,
    vitaminC: 228.3
  },
  {
    name: "Brazilian Pepper Fruit",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Broadleaf Bramble",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Buddha Coconut",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Burmese Grape",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Button Mangosteen",
    calories: 73,
    sodium: 7,
    carbs: 17.9,
    sugar: 0,
    protein: 0.6,
    fat: 0.6,
    vitaminC: 2.9
  },
  {
    name: "Cacao (Cocoa Fruit)",
    calories: 228,
    sodium: 21,
    carbs: 58,
    sugar: 1.5,
    protein: 20,
    fat: 14,
    vitaminC: 0
  },
  {
    name: "Calamansi",
    calories: 29,
    sodium: 2,
    carbs: 6.9,
    sugar: 2.5,
    protein: 1.1,
    fat: 0.3,
    vitaminC: 53
  },
  {
    name: "Calabash Fruit",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Camachile",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Candle Nut Fruit",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Capulin Cherry",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Catawba Grape",
    calories: 69,
    sodium: 2,
    carbs: 18,
    sugar: 16,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 3.2
  },
  {
    name: "Catmon Fruit",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Cedar Bay Cherry",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Ceiba Fruit",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Chalta Fruit",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Chapote",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Chayote",
    calories: 19,
    sodium: 2,
    carbs: 4.5,
    sugar: 1.7,
    protein: 0.8,
    fat: 0.1,
    vitaminC: 7.7
  },             
      {
  name: "Monstera Deliciosa",
  calories: 52,
  sodium: 1,
  carbs: 13.6,
  sugar: 0,
  protein: 0.6,
  fat: 0.2,
  vitaminC: 40.6
},
{
  name: "Morinda",
  calories: 47,
  sodium: 1,
  carbs: 9.6,
  sugar: 4.3,
  protein: 0.7,
  fat: 0.5,
  vitaminC: 35
},
{
  name: "Mountain Soursop",
  calories: 66,
  sodium: 14,
  carbs: 16.8,
  sugar: 13.5,
  protein: 1,
  fat: 0.3,
  vitaminC: 20.6
},          
     {
    name: "Naranjilla",
    calories: 25,
    sodium: 1,
    carbs: 5.9,
    sugar: 3.1,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 31.2
  },
  {
    name: "Natal Plum",
    calories: 62,
    sodium: 1,
    carbs: 14.3,
    sugar: 0,
    protein: 1.1,
    fat: 0.5,
    vitaminC: 38
  },
  {
    name: "Noni",
    calories: 47,
    sodium: 1,
    carbs: 9.6,
    sugar: 4.3,
    protein: 0.7,
    fat: 0.5,
    vitaminC: 35
  },
  {
    name: "Olallieberry",
    calories: 43,
    sodium: 1,
    carbs: 9.6,
    sugar: 4.3,
    protein: 1.4,
    fat: 0.5,
    vitaminC: 21
  },
  {
    name: "Oregon Grape",
    calories: 56,
    sodium: 1,
    carbs: 13.8,
    sugar: 7.4,
    protein: 1.4,
    fat: 0.2,
    vitaminC: 41
  },
  {
    name: "Otaheite Apple",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Palmyra Fruit",
    calories: 43,
    sodium: 1,
    carbs: 9.6,
    sugar: 4.3,
    protein: 0.7,
    fat: 0.5,
    vitaminC: 35
  },
  {
    name: "Pepino",
    calories: 21,
    sodium: 2,
    carbs: 4.8,
    sugar: 3.5,
    protein: 0.6,
    fat: 0.1,
    vitaminC: 22.4
  },
  {
    name: "Phalsa",
    calories: 43,
    sodium: 1,
    carbs: 9.6,
    sugar: 4.3,
    protein: 0.7,
    fat: 0.5,
    vitaminC: 35
  },
  {
    name: "Pili Nut Fruit",
    calories: 719,
    sodium: 2,
    carbs: 4.6,
    sugar: 0,
    protein: 10.8,
    fat: 79.6,
    vitaminC: 0
  },
  {
    name: "Pitomba",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Pomelo",
    calories: 38,
    sodium: 1,
    carbs: 9.6,
    sugar: 0,
    protein: 0.8,
    fat: 0.1,
    vitaminC: 61
  },
  {
    name: "Pulasan",
    calories: 68,
    sodium: 11,
    carbs: 16,
    sugar: 0,
    protein: 0.9,
    fat: 0.2,
    vitaminC: 4.9
  },
  {
    name: "Purple Mangosteen",
    calories: 73,
    sodium: 7,
    carbs: 17.9,
    sugar: 0,
    protein: 0.6,
    fat: 0.6,
    vitaminC: 2.9
  },
  {
    name: "Quararibea Cordata",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Red Banana",
    calories: 89,
    sodium: 1,
    carbs: 23,
    sugar: 12,
    protein: 1.1,
    fat: 0.3,
    vitaminC: 14
  },
  {
    name: "Rollinia",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Salal Berry",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Salmonberry",
    calories: 47,
    sodium: 1,
    carbs: 9.6,
    sugar: 4.3,
    protein: 0.7,
    fat: 0.5,
    vitaminC: 35
  },
  {
    name: "Sandoricum Koetjape",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Satsuma",
    calories: 47,
    sodium: 0,
    carbs: 11.8,
    sugar: 9.4,
    protein: 0.9,
    fat: 0.2,
    vitaminC: 53.2
  },
  {
    name: "Sea Buckthorn",
    calories: 82,
    sodium: 4,
    carbs: 10.2,
    sugar: 0,
    protein: 1.7,
    fat: 5.4,
    vitaminC: 695
  },
  {
    name: "Serviceberry",
    calories: 79,
    sodium: 3,
    carbs: 20,
    sugar: 0,
    protein: 1.2,
    fat: 0.2,
    vitaminC: 69
  },
  {
    name: "Sloe Berry",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Soncoya",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Surinam Cherry",
    calories: 33,
    sodium: 1,
    carbs: 7.7,
    sugar: 0,
    protein: 0.4,
    fat: 0.3,
    vitaminC: 1677.6
  },
  {
    name: "Sweet Granadilla",
    calories: 97,
    sodium: 28,
    carbs: 23,
    sugar: 11,
    protein: 2.2,
    fat: 0.7,
    vitaminC: 30
  },
  {
    name: "Tamarind",
    calories: 239,
    sodium: 28,
    carbs: 62.5,
    sugar: 57.4,
    protein: 2.8,
    fat: 0.6,
    vitaminC: 3.5
  },
  {
    name: "Thimbleberry",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Ugni",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Velvet Apple",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Yuzu",
    calories: 30,
    sodium: 2,
    carbs: 11,
    sugar: 1.7,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 29.1
  },             
  {
    name: "Ackee",
    calories: 151,
    sodium: 240,
    carbs: 0.8,
    sugar: 0.5,
    protein: 2.9,
    fat: 15.2,
    vitaminC: 65
  },
  {
    name: "Ambarella",
    calories: 46,
    sodium: 2,
    carbs: 11,
    sugar: 0,
    protein: 0.5,
    fat: 0.1,
    vitaminC: 30
  },
  {
    name: "Aronia Berry",
    calories: 47,
    sodium: 1,
    carbs: 9.6,
    sugar: 4.3,
    protein: 0.7,
    fat: 0.5,
    vitaminC: 35
  },
  {
    name: "Atemoya",
    calories: 94,
    sodium: 5,
    carbs: 23.6,
    sugar: 18,
    protein: 2.1,
    fat: 0.6,
    vitaminC: 36.3
  },
  {
    name: "Babaco",
    calories: 21,
    sodium: 2,
    carbs: 4.8,
    sugar: 3.5,
    protein: 0.6,
    fat: 0.1,
    vitaminC: 22.4
  },
  {
    name: "Bacuri",
    calories: 135,
    sodium: 1,
    carbs: 32,
    sugar: 0,
    protein: 1.5,
    fat: 0.5,
    vitaminC: 20
  },
  {
    name: "Bignay",
    calories: 80,
    sodium: 2,
    carbs: 18,
    sugar: 0,
    protein: 1.2,
    fat: 0.3,
    vitaminC: 45
  },
  {
    name: "Bilberry",
    calories: 42,
    sodium: 1,
    carbs: 11.5,
    sugar: 7.4,
    protein: 0.7,
    fat: 0.5,
    vitaminC: 16
  },
  {
    name: "Black Sapote",
    calories: 79,
    sodium: 1,
    carbs: 19,
    sugar: 13,
    protein: 1.5,
    fat: 0.2,
    vitaminC: 20.3
  },
  {
    name: "Blood Orange",
    calories: 47,
    sodium: 0,
    carbs: 11.8,
    sugar: 9.4,
    protein: 0.9,
    fat: 0.2,
    vitaminC: 53.2
  },
  {
    name: "Boysenberry",
    calories: 43,
    sodium: 1,
    carbs: 9.6,
    sugar: 4.3,
    protein: 1.4,
    fat: 0.5,
    vitaminC: 21
  },
  {
    name: "Buddha's Hand",
    calories: 29,
    sodium: 2,
    carbs: 6.9,
    sugar: 2.5,
    protein: 1.1,
    fat: 0.3,
    vitaminC: 53
  },
  {
    name: "Caimito",
    calories: 67,
    sodium: 1,
    carbs: 16.8,
    sugar: 0,
    protein: 0.7,
    fat: 0.4,
    vitaminC: 14.7
  },
  {
    name: "Camu Camu",
    calories: 17,
    sodium: 1,
    carbs: 3.8,
    sugar: 0,
    protein: 0.4,
    fat: 0.2,
    vitaminC: 2780
  },
  {
    name: "Canistel",
    calories: 138,
    sodium: 2,
    carbs: 36.7,
    sugar: 0,
    protein: 1.7,
    fat: 0.6,
    vitaminC: 23
  },
  {
    name: "Cape Gooseberry",
    calories: 53,
    sodium: 1,
    carbs: 11.2,
    sugar: 0,
    protein: 1.9,
    fat: 0.7,
    vitaminC: 11
  },
  {
    name: "Carissa",
    calories: 62,
    sodium: 1,
    carbs: 14.3,
    sugar: 0,
    protein: 1.1,
    fat: 0.5,
    vitaminC: 38
  },
  {
    name: "Cashew Apple",
    calories: 43,
    sodium: 3,
    carbs: 9.7,
    sugar: 5.2,
    protein: 0.5,
    fat: 0.1,
    vitaminC: 164
  },
  {
    name: "Cherimoya",
    calories: 75,
    sodium: 5,
    carbs: 17.7,
    sugar: 13,
    protein: 1.6,
    fat: 0.7,
    vitaminC: 12.6
  },
  {
    name: "Chokeberry",
    calories: 47,
    sodium: 1,
    carbs: 9.6,
    sugar: 4.3,
    protein: 0.7,
    fat: 0.5,
    vitaminC: 35
  },
  {
    name: "Citron",
    calories: 29,
    sodium: 2,
    carbs: 6.9,
    sugar: 2.5,
    protein: 1.1,
    fat: 0.3,
    vitaminC: 53
  },
  {
    name: "Cloudberry",
    calories: 51,
    sodium: 1,
    carbs: 8.6,
    sugar: 3.2,
    protein: 2.4,
    fat: 0.8,
    vitaminC: 158
  },
  {
    name: "Cocona",
    calories: 28,
    sodium: 1,
    carbs: 6.5,
    sugar: 0,
    protein: 0.6,
    fat: 0.1,
    vitaminC: 12
  },
  {
    name: "Currant (Red, Black, White)",
    calories: 56,
    sodium: 1,
    carbs: 13.8,
    sugar: 7.4,
    protein: 1.4,
    fat: 0.2,
    vitaminC: 41
  },
  {
    name: "Damson Plum",
    calories: 46,
    sodium: 0,
    carbs: 11.4,
    sugar: 9.9,
    protein: 0.7,
    fat: 0.3,
    vitaminC: 9.5
  },
  {
    name: "Davidson's Plum",
    calories: 40,
    sodium: 1,
    carbs: 9.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 36
  },
  {
    name: "Dekopon",
    calories: 47,
    sodium: 0,
    carbs: 11.8,
    sugar: 9.4,
    protein: 0.9,
    fat: 0.2,
    vitaminC: 53.2
  },
  {
    name: "Desert Lime",
    calories: 30,
    sodium: 2,
    carbs: 11,
    sugar: 1.7,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 29.1
  },
  {
    name: "Eggfruit",
    calories: 138,
    sodium: 2,
    carbs: 36.7,
    sugar: 0,
    protein: 1.7,
    fat: 0.6,
    vitaminC: 23
  },
  {
    name: "Emu Apple",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Finger Lime",
    calories: 30,
    sodium: 2,
    carbs: 11,
    sugar: 1.7,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 29.1
  },
  {
    name: "Gac Fruit",
    calories: 49,
    sodium: 2,
    carbs: 10.5,
    sugar: 0,
    protein: 1.2,
    fat: 1.5,
    vitaminC: 25.2
  },
  {
    name: "Genipapo",
    calories: 66,
    sodium: 1,
    carbs: 16.5,
    sugar: 0,
    protein: 0.8,
    fat: 0.4,
    vitaminC: 36.4
  },
  {
    name: "Governor's Plum",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Grumichama",
    calories: 57,
    sodium: 1,
    carbs: 14,
    sugar: 0,
    protein: 0.8,
    fat: 0.2,
    vitaminC: 2.4
  },
  {
    name: "Hog Plum",
    calories: 46,
    sodium: 1,
    carbs: 11.4,
    sugar: 9.9,
    protein: 0.7,
    fat: 0.3,
    vitaminC: 9.5
  },
  {
    name: "Ice Cream Bean",
    calories: 80,
    sodium: 7,
    carbs: 19,
    sugar: 13,
    protein: 1.2,
    fat: 1.2,
    vitaminC: 20
  },
  {
    name: "Illawarra Plum",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Imbe",
    calories: 57,
    sodium: 1,
    carbs: 14,
    sugar: 0,
    protein: 0.8,
    fat: 0.2,
    vitaminC: 2.4
  },
  {
    name: "Indian Gooseberry (Amla)",
    calories: 44,
    sodium: 1,
    carbs: 10.2,
    sugar: 0,
    protein: 0.9,
    fat: 0.6,
    vitaminC: 600
  },
  {
    name: "Jaboticaba",
    calories: 58,
    sodium: 0,
    carbs: 15,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 22
  },
  {
    name: "Jambul",
    calories: 60,
    sodium: 1,
    carbs: 15,
    sugar: 0,
    protein: 0.8,
    fat: 0.4,
    vitaminC: 36.4
  },
  {
    name: "Japanese Persimmon",
    calories: 127,
    sodium: 1,
    carbs: 34,
    sugar: 0,
    protein: 0.8,
    fat: 0.4,
    vitaminC: 66
  },
  {
    name: "Jatoba",
    calories: 135,
    sodium: 1,
    carbs: 32,
    sugar: 0,
    protein: 1.5,
    fat: 0.5,
    vitaminC: 20
  },
  {
    name: "Juneberry",
    calories: 79,
    sodium: 3,
    carbs: 20,
    sugar: 0,
    protein: 1.2,
    fat: 0.2,
    vitaminC: 69
  },
  {
    name: "Kabosu",
    calories: 30,
    sodium: 2,
    carbs: 11,
    sugar: 1.7,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 29.1
  },
  {
    name: "Kakadu Plum",
    calories: 28,
    sodium: 1,
    carbs: 6.5,
    sugar: 0,
    protein: 0.6,
    fat: 0.1,
    vitaminC: 2300
  },
  {
    name: "Karonda",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Keppel Fruit",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Korlan",
    calories: 57,
    sodium: 1,
    carbs: 14,
    sugar: 0,
    protein: 0.8,
    fat: 0.2,
    vitaminC: 2.4
  },
  {
    name: "Kwai Muk",
    calories: 57,
    sodium: 1,
    carbs: 14,
    sugar: 0,
    protein: 0.8,
    fat: 0.2,
    vitaminC: 2.4
  },
  {
    name: "Langsat",
    calories: 57,
    sodium: 1,
    carbs: 14,
    sugar: 0,
    protein: 0.8,
    fat: 0.2,
    vitaminC: 2.4
  },
  {
    name: "Lapsi",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Lardizabala",
    calories: 57,
    sodium: 1,
    carbs: 14,
    sugar: 0,
    protein: 0.8,
    fat: 0.2,
    vitaminC: 2.4
  },
  {
    name: "Lulo",
    calories: 28,
    sodium: 1,
    carbs: 6.5,
    sugar: 0,
    protein: 0.6,
    fat: 0.1,
    vitaminC: 12
  },
  {
    name: "Mabolo",
    calories: 67,
    sodium: 1,
    carbs: 16.8,
    sugar: 0,
    protein: 0.7,
    fat: 0.4,
    vitaminC: 14.7
  },
  {
    name: "Madrono",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Malabar Plum",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Mamey Sapote",
    calories: 124,
    sodium: 2,
    carbs: 32.7,
    sugar: 0,
    protein: 1.5,
    fat: 0.6,
    vitaminC: 23
  },
  {
    name: "Mangaba",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Marionberry",
    calories: 43,
    sodium: 1,
    carbs: 9.6,
    sugar: 4.3,
    protein: 1.4,
    fat: 0.5,
    vitaminC: 21
  },
  {
    name: "Mayapple",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Medlar",
    calories: 79,
    sodium: 3,
    carbs: 20,
    sugar: 0,
    protein: 1.2,
    fat: 0.2,
    vitaminC: 69
  },
  {
    name: "Melon Pear",
    calories: 28,
    sodium: 1,
    carbs: 6.5,
    sugar: 0,
    protein: 0.6,
    fat: 0.1,
    vitaminC: 12
  },
  {
    name: "Miracle Berry",
    calories: 37,
    sodium: 1,
    carbs: 9.6,
    sugar: 0,
    protein: 0.4,
    fat: 0.1,
    vitaminC: 2.4
  },
  
  {
    name: "Apple",
    calories: 52,
    sodium: 1,
    carbs: 14,
    sugar: 10,
    protein: 0.3,
    fat: 0.2,
    vitaminC: 7
  },
  {
    name: "Banana",
    calories: 89,
    sodium: 1,
    carbs: 23,
    sugar: 12,
    protein: 1.1,
    fat: 0.3,
    vitaminC: 14
  },
  {
    name: "Orange",
    calories: 47,
    sodium: 0,
    carbs: 12,
    sugar: 9,
    protein: 0.9,
    fat: 0.1,
    vitaminC: 53.2
  },
  {
    name: "Strawberry",
    calories: 32,
    sodium: 1,
    carbs: 7.7,
    sugar: 4.9,
    protein: 0.7,
    fat: 0.3,
    vitaminC: 58.8
  },
  {
    name: "Grape",
    calories: 69,
    sodium: 2,
    carbs: 18,
    sugar: 16,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 3.2
  },
  {
    name: "Pineapple",
    calories: 50,
    sodium: 1,
    carbs: 13,
    sugar: 10,
    protein: 0.5,
    fat: 0.1,
    vitaminC: 47.8
  },
  {
    name: "Mango",
    calories: 60,
    sodium: 1,
    carbs: 15,
    sugar: 14,
    protein: 0.8,
    fat: 0.4,
    vitaminC: 36.4
  },
  {
    name: "Peach",
    calories: 39,
    sodium: 0,
    carbs: 10,
    sugar: 8,
    protein: 0.9,
    fat: 0.3,
    vitaminC: 6.6
  },
  {
    name: "Pear",
    calories: 57,
    sodium: 1,
    carbs: 15,
    sugar: 10,
    protein: 0.4,
    fat: 0.1,
    vitaminC: 4.2
  },
  {
    name: "Kiwi",
    calories: 61,
    sodium: 3,
    carbs: 15,
    sugar: 9,
    protein: 1.1,
    fat: 0.5,
    vitaminC: 92.7
  },
  {
    name: "Watermelon",
    calories: 30,
    sodium: 1,
    carbs: 8,
    sugar: 6,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 8.1
  },
  {
    name: "Blueberry",
    calories: 57,
    sodium: 1,
    carbs: 14,
    sugar: 10,
    protein: 0.7,
    fat: 0.3,
    vitaminC: 9.7
  },
  {
    name: "Raspberry",
    calories: 52,
    sodium: 1,
    carbs: 12,
    sugar: 4.4,
    protein: 1.2,
    fat: 0.7,
    vitaminC: 26.2
  },
  {
    name: "Blackberry",
    calories: 43,
    sodium: 1,
    carbs: 10,
    sugar: 4.9,
    protein: 1.4,
    fat: 0.5,
    vitaminC: 21
  },
  {
    name: "Cherry",
    calories: 50,
    sodium: 0,
    carbs: 12,
    sugar: 8,
    protein: 1,
    fat: 0.3,
    vitaminC: 7
  },
  {
    name: "Plum",
    calories: 46,
    sodium: 0,
    carbs: 11,
    sugar: 10,
    protein: 0.7,
    fat: 0.3,
    vitaminC: 9.5
  },
  {
    name: "Apricot",
    calories: 48,
    sodium: 1,
    carbs: 11,
    sugar: 9,
    protein: 1.4,
    fat: 0.4,
    vitaminC: 10
  },
  {
    name: "Guava",
    calories: 68,
    sodium: 2,
    carbs: 14,
    sugar: 9,
    protein: 2.6,
    fat: 1,
    vitaminC: 228.3
  },
  {
    name: "Papaya",
    calories: 43,
    sodium: 8,
    carbs: 11,
    sugar: 1,
    protein: 0.5,
    fat: 0.3,
    vitaminC: 60.9
  },
  {
    name: "Lemon",
    calories: 29,
    sodium: 2,
    carbs: 9,
    sugar: 2.5,
    protein: 1.1,
    fat: 0.3,
    vitaminC: 53
  },
  {
    name: "Lime",
    calories: 30,
    sodium: 2,
    carbs: 11,
    sugar: 1.7,
    protein: 0.7,
    fat: 0.2,
    vitaminC: 29.1
  },
  {
    name: "Grapefruit",
    calories: 42,
    sodium: 0,
    carbs: 11,
    sugar: 7,
    protein: 0.8,
    fat: 0.1,
    vitaminC: 31.2
  },
  {
    name: "Cantaloupe",
    calories: 34,
    sodium: 16,
    carbs: 8,
    sugar: 8,
    protein: 0.8,
    fat: 0.2,
    vitaminC: 36.7
  },
  {
    name: "Honeydew",
    calories: 36,
    sodium: 18,
    carbs: 9,
    sugar: 8,
    protein: 0.5,
    fat: 0.1,
    vitaminC: 18
  },
  {
    name: "Pomegranate",
    calories: 83,
    sodium: 3,
    carbs: 19,
    sugar: 14,
    protein: 1.7,
    fat: 1.2,
    vitaminC: 10.2
  },
  {
    name: "Dragon Fruit",
    calories: 60,
    sodium: 0,
    carbs: 13,
    sugar: 3,
    protein: 1.2,
    fat: 0,
    vitaminC: 3
  },
  {
    name: "Passion Fruit",
    calories: 97,
    sodium: 28,
    carbs: 23,
    sugar: 11,
    protein: 2.2,
    fat: 0.7,
    vitaminC: 30
  },
  {
    name: "Lychee",
    calories: 66,
    sodium: 1,
    carbs: 16.5,
    sugar: 15,
    protein: 0.8,
    fat: 0.4,
    vitaminC: 71.5
  },
  {
    name: "Coconut",
    calories: 354,
    sodium: 20,
    carbs: 15,
    sugar: 6,
    protein: 3.3,
    fat: 33,
    vitaminC: 3.3
  },
  {
    name: "Avocado",
    calories: 160,
    sodium: 7,
    carbs: 9,
    sugar: 0.7,
    protein: 2,
    fat: 15,
    vitaminC: 10
  },
  {
    name: "Fig",
    calories: 74,
    sodium: 1,
    carbs: 19,
    sugar: 16,
    protein: 0.8,
    fat: 0.3,
    vitaminC: 2
  },
  {
    name: "Date",
    calories: 282,
    sodium: 2,
    carbs: 75,
    sugar: 63,
    protein: 2.5,
    fat: 0.4,
    vitaminC: 0
  },
  {
    name: "Persimmon",
    calories: 127,
    sodium: 1,
    carbs: 34,
    sugar: 0,
    protein: 0.8,
    fat: 0.4,
    vitaminC: 66
  },
  {
    name: "Cranberry",
    calories: 46,
    sodium: 2,
    carbs: 12,
    sugar: 4,
    protein: 0.4,
    fat: 0.1,
    vitaminC: 13.3
  },
  {
    name: "Gooseberry",
    calories: 44,
    sodium: 1,
    carbs: 10,
    sugar: 0,
    protein: 0.9,
    fat: 0.6,
    vitaminC: 27.7
  },
  {
    name: "Elderberry",
    calories: 73,
    sodium: 6,
    carbs: 18.4,
    sugar: 0,
    protein: 0.7,
    fat: 0.5,
    vitaminC: 36
  },
  {
    name: "Mulberry",
    calories: 43,
    sodium: 10,
    carbs: 9.8,
    sugar: 8.1,
    protein: 1.4,
    fat: 0.4,
    vitaminC: 36.4
  },
  {
    name: "Jackfruit",
    calories: 95,
    sodium: 2,
    carbs: 23,
    sugar: 19,
    protein: 1.7,
    fat: 0.6,
    vitaminC: 13.7
  },
  {
    name: "Durian",
    calories: 147,
    sodium: 2,
    carbs: 27,
    sugar: 0,
    protein: 1.5,
    fat: 5.3,
    vitaminC: 19.7
  },
  {
    name: "Rambutan",
    calories: 68,
    sodium: 11,
    carbs: 16,
    sugar: 0,
    protein: 0.9,
    fat: 0.2,
    vitaminC: 4.9
  },
  {
    name: "Starfruit",
    calories: 31,
    sodium: 2,
    carbs: 6.7,
    sugar: 3.9,
    protein: 1,
    fat: 0.3,
    vitaminC: 34.4
  },
  {
    name: "Tamarind",
    calories: 239,
    sodium: 28,
    carbs: 62.5,
    sugar: 57.4,
    protein: 2.8,
    fat: 0.6,
    vitaminC: 3.5
  },
  {
    name: "Plantain",
    calories: 122,
    sodium: 4,
    carbs: 31.9,
    sugar: 15,
    protein: 1.3,
    fat: 0.4,
    vitaminC: 18.4
  },
  {
    name: "Quince",
    calories: 57,
    sodium: 4,
    carbs: 15,
    sugar: 0,
    protein: 0.4,
    fat: 0.1,
    vitaminC: 15
  },
  {
    name: "Nectarine",
    calories: 44,
    sodium: 0,
    carbs: 11,
    sugar: 8,
    protein: 1.1,
    fat: 0.3,
    vitaminC: 5.4
  },
  {
    name: "Clementine",
    calories: 47,
    sodium: 1,
    carbs: 12,
    sugar: 9,
    protein: 0.9,
    fat: 0.2,
    vitaminC: 48.8
  },
  {
    name: "Tangerine",
    calories: 53,
    sodium: 2,
    carbs: 13,
    sugar: 9,
    protein: 0.8,
    fat: 0.3,
    vitaminC: 26.7
  },
  {
    name: "Kumquat",
    calories: 71,
    sodium: 10,
    carbs: 15.9,
    sugar: 9.4,
    protein: 1.9,
    fat: 0.9,
    vitaminC: 43.9
  },
  {
    name: "Loquat",
    calories: 47,
    sodium: 1,
    carbs: 12,
    sugar: 0,
    protein: 0.4,
    fat: 0.2,
    vitaminC: 1
  },
  {
    name: "Feijoa",
    calories: 55,
    sodium: 3,
    carbs: 13,
    sugar: 8,
    protein: 0.6,
    fat: 0.6,
    vitaminC: 20.3
  },
  {
    name: "Soursop",
    calories: 66,
    sodium: 14,
    carbs: 16.8,
    sugar: 13.5,
    protein: 1,
    fat: 0.3,
    vitaminC: 20.6
  },
  {
    name: "Breadfruit",
    calories: 103,
    sodium: 2,
    carbs: 27,
    sugar: 11,
    protein: 1.1,
    fat: 0.2,
    vitaminC: 29
  },
  {
    name: "Cempedak",
    calories: 117,
    sodium: 3,
    carbs: 27.6,
    sugar: 0,
    protein: 2.5,
    fat: 0.4,
    vitaminC: 20
  },
  {
    name: "Salak",
    calories: 82,
    sodium: 0,
    carbs: 21,
    sugar: 0,
    protein: 0.6,
    fat: 0.4,
    vitaminC: 2
  },
  {
    name: "Longan",
    calories: 60,
    sodium: 0,
    carbs: 15,
    sugar: 0,
    protein: 1.3,
    fat: 0.1,
    vitaminC: 84
  },
  {
    name: "Mangosteen",
    calories: 73,
    sodium: 7,
    carbs: 17.9,
    sugar: 0,
    protein: 0.6,
    fat: 0.6,
    vitaminC: 2.9
  },
  {
    name: "Sapodilla",
    calories: 83,
    sodium: 12,
    carbs: 19.9,
    sugar: 0,
    protein: 0.4,
    fat: 1.1,
    vitaminC: 14.7
  },
  {
    name: "Jabuticaba",
    calories: 58,
    sodium: 0,
    carbs: 15,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 22
  },
  {
    name: "Acerola",
    calories: 32,
    sodium: 3,
    carbs: 7.7,
    sugar: 0,
    protein: 0.4,
    fat: 0.3,
    vitaminC: 1677.6
  },
  {
    name: "Bael",
    calories: 137,
    sodium: 6,
    carbs: 31.8,
    sugar: 0,
    protein: 1.8,
    fat: 0.6,
    vitaminC: 60
  },
  {
    name: "Carambola",
    calories: 31,
    sodium: 2,
    carbs: 6.7,
    sugar: 3.9,
    protein: 1,
    fat: 0.3,
    vitaminC: 34.4
  },
  {
    name: "Chico",
    calories: 83,
    sodium: 12,
    carbs: 19.9,
    sugar: 0,
    protein: 0.4,
    fat: 1.1,
    vitaminC: 14.7
  },
  {
    name: "Cupuaçu",
    calories: 49,
    sodium: 2,
    carbs: 10.5,
    sugar: 0,
    protein: 1.2,
    fat: 1.5,
    vitaminC: 25.2
  },
  {
    name: "Genip",
    calories: 66,
    sodium: 1,
    carbs: 16.5,
    sugar: 0,
    protein: 0.8,
    fat: 0.4,
    vitaminC: 36.4
  },
  {
    name: "Horned Melon",
    calories: 44,
    sodium: 2,
    carbs: 8,
    sugar: 3,
    protein: 1.8,
    fat: 1.3,
    vitaminC: 5.3
  },
  {
    name: "Jujube",
    calories: 79,
    sodium: 3,
    carbs: 20,
    sugar: 0,
    protein: 1.2,
    fat: 0.2,
    vitaminC: 69
  },
  {
    name: "Kei Apple",
    calories: 52,
    sodium: 1,
    carbs: 13.6,
    sugar: 0,
    protein: 0.6,
    fat: 0.2,
    vitaminC: 40.6
  },
  {
    name: "Langsat",
    calories: 57,
    sodium: 1,
    carbs: 14,
    sugar: 0,
    protein: 0.8,
    fat: 0.2,
    vitaminC: 2.4
  },
  {
    name: "Miracle Fruit",
    calories: 37,
    sodium: 1,
    carbs: 9.6,
    sugar: 0,
    protein: 0.4,
    fat: 0.1,
    vitaminC: 2.4
  },
  {
    name: "Nance",
    calories: 90,
    sodium: 1,
    carbs: 23,
    sugar: 0,
    protein: 1.1,
    fat: 0.5,
    vitaminC: 36.4
  },
  {
    name: "Pawpaw",
    calories: 80,
    sodium: 7,
    carbs: 19,
    sugar: 13,
    protein: 1.2,
    fat: 1.2,
    vitaminC: 20
  },
  {
    name: "Pitaya",
    calories: 60,
    sodium: 0,
    carbs: 13,
    sugar: 3,
    protein: 1.2,
    fat: 0,
    vitaminC: 3
  },
  {
    name: "Santol",
    calories: 64,
    sodium: 1,
    carbs: 16.5,
    sugar: 0,
    protein: 0.8,
    fat: 0.4,
    vitaminC: 43.6
  },
  {
    name: "Sapote",
    calories: 124,
    sodium: 2,
    carbs: 32.7,
    sugar: 0,
    protein: 1.5,
    fat: 0.6,
    vitaminC: 23
  },
  {
    name: "Sugar Apple",
    calories: 94,
    sodium: 9,
    carbs: 23.6,
    sugar: 0,
    protein: 2.1,
    fat: 0.6,
    vitaminC: 36.3
  },
  {
    name: "Tamarillo",
    calories: 31,
    sodium: 1,
    carbs: 6.1,
    sugar: 4.2,
    protein: 1.5,
    fat: 0.4,
    vitaminC: 29.3
  },
  {
    name: "Ugli Fruit",
    calories: 45,
    sodium: 2,
    carbs: 11,
    sugar: 8,
    protein: 0.9,
    fat: 0.2,
    vitaminC: 70
  },
  {
    name: "White Sapote",
    calories: 124,
    sodium: 2,
    carbs: 32.7,
    sugar: 0,
    protein: 1.5,
    fat: 0.6,
    vitaminC: 23
  },
  {
    name: "Yangmei",
    calories: 28,
    sodium: 1,
    carbs: 6.5,
    sugar: 0,
    protein: 0.6,
    fat: 0.1,
    vitaminC: 12
  },
  {
    name: "Zigzag Vine Fruit",
    calories: 60,
    sodium: 1,
    carbs: 15,
    sugar: 0,
    protein: 0.8,
    fat: 0.4,
    vitaminC: 36.4
  }
];
            
        let selectedFood = null;

        // Track recent searches
        function useRecentSearch(foodName) {
            document.getElementById('foodSearch').value = foodName;
            const food = foodDatabase.find(f => f.name === foodName);
            if (food) {
                selectFood(food);
            }
        }

        // Search functionality
        document.getElementById('foodSearch').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const results = foodDatabase.filter(food => 
                food.name.toLowerCase().includes(searchTerm));

            const resultsDiv = document.getElementById('foodResults');
            resultsDiv.innerHTML = '';

            if (searchTerm && results.length > 0) {
                resultsDiv.style.display = 'block';
                results.forEach(food => {
                    const div = document.createElement('div');
                    div.className = 'food-item';
                    div.textContent = food.name;
                    div.onclick = () => selectFood(food);
                    resultsDiv.appendChild(div);
                });
            } else {
                resultsDiv.style.display = 'none';
            }
        });

        function selectFood(food) {
            selectedFood = food;
            document.getElementById('selectedFood').innerHTML = `
                <strong>Selected:</strong> ${food.name} (per 100g)
            `;
            document.getElementById('grams').disabled = false;
            document.getElementById('grams').focus();
            updateNutritionInfo();
        }

        // Meal type selection
        function selectMealType(element) {
            document.querySelectorAll('.meal-option').forEach(el => {
                el.classList.remove('selected');
            });
            element.classList.add('selected');
            document.getElementById('mealType').value = element.getAttribute('data-value');
        }

        // Nutrition calculator
        document.getElementById('grams').addEventListener('input', updateNutritionInfo);

        function updateNutritionInfo() {
            const grams = document.getElementById('grams').value;
            if (!grams || !selectedFood) return;

            const multiplier = grams / 100;
            const infoDiv = document.getElementById('nutritionInfo');

            infoDiv.innerHTML = `
                <div class="nutrition-item">
                    <div class="nutrition-value">${(selectedFood.calories * multiplier).toFixed(1)}</div>
                    <div class="nutrition-label">Calories</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-value">${(selectedFood.sodium * multiplier).toFixed(1)}</div>
                    <div class="nutrition-label">Sodium (mg)</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-value">${(selectedFood.carbs * multiplier).toFixed(1)}</div>
                    <div class="nutrition-label">Carbs (g)</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-value">${(selectedFood.sugar * multiplier).toFixed(1)}</div>
                    <div class="nutrition-label">Sugar (g)</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-value">${(selectedFood.protein * multiplier).toFixed(1)}</div>
                    <div class="nutrition-label">Protein (g)</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-value">${(selectedFood.fat * multiplier).toFixed(1)}</div>
                    <div class="nutrition-label">Fat (g)</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-value">${(selectedFood.vitaminC * multiplier).toFixed(1)}</div>
                    <div class="nutrition-label">Vitamin C (%)</div>
                </div>
            `;
        }

        // Food logging and local storage
        function logFood() {
            const grams = document.getElementById('grams').value;
            const mealType = document.getElementById('mealType').value;

            if (!selectedFood || !grams) {
                alert('Please select a food and enter grams');
                return;
            }

            const multiplier = grams / 100;
            const logEntry = {
                food: selectedFood.name,
                grams: grams,
                calories: (selectedFood.calories * multiplier).toFixed(1),
                protein: (selectedFood.protein * multiplier).toFixed(1),
                carbs: (selectedFood.carbs * multiplier).toFixed(1),
                fat: (selectedFood.fat * multiplier).toFixed(1),
                mealType: mealType,
                timestamp: new Date().getTime()
            };

            // Save to localStorage
            const logs = JSON.parse(localStorage.getItem('foodLogs') || '[]');
            logs.push(logEntry);
            localStorage.setItem('foodLogs', JSON.stringify(logs));

            updateLogDisplay();
            resetCalculator();
        }

        function resetCalculator() {
            selectedFood = null;
            document.getElementById('foodSearch').value = '';
            document.getElementById('grams').value = '';
            document.getElementById('selectedFood').innerHTML = '';
            document.getElementById('nutritionInfo').innerHTML = '';
            document.getElementById('foodResults').style.display = 'none';
            document.getElementById('grams').disabled = true;
        }

        function updateLogDisplay() {
            const logs = JSON.parse(localStorage.getItem('foodLogs') || '[]');
            const groupedLogs = {
                breakfast: [],
                lunch: [],
                dinner: [],
                snacks: []
            };

            logs.forEach(log => {
                groupedLogs[log.mealType].push(log);
            });

            let totalCalories = 0;
            let totalProtein = 0;
            let totalCarbs = 0;
            let totalFats = 0;
            let logHTML = '';

            Object.entries(groupedLogs).forEach(([mealType, entries]) => {
                if (entries.length > 0) {
                  logHTML += `<div class="meal-category">
                        <div class="meal-category-title">${mealType.charAt(0).toUpperCase() + mealType.slice(1)}</div>`;

                    entries.forEach(entry => {
                        totalCalories += parseFloat(entry.calories);
                        totalProtein += parseFloat(entry.protein || 0);
                        totalCarbs += parseFloat(entry.carbs || 0);
                        totalFats += parseFloat(entry.fat || 0);

                        logHTML += `
                            <div class="meal-entry">
                                <div>${entry.food} - ${entry.grams}g (${entry.calories} kcal)</div>
                                <span class="delete-btn" onclick="deleteLog(${entry.timestamp})">×</span>
                            </div>
                        `;
                    });

                    logHTML += `</div>`;
                }
            });

            document.getElementById('mealLogs').innerHTML = logHTML;
            document.getElementById('totalCalories').textContent = totalCalories.toFixed(0);
            document.getElementById('totalProtein').textContent = totalProtein.toFixed(1);
            document.getElementById('totalCarbs').textContent = totalCarbs.toFixed(1);
            document.getElementById('totalFats').textContent = totalFats.toFixed(1);
        }

        function deleteLog(timestamp) {
            const logs = JSON.parse(localStorage.getItem('foodLogs') || '[]');
            const filteredLogs = logs.filter(log => log.timestamp !== timestamp);
            localStorage.setItem('foodLogs', JSON.stringify(filteredLogs));
            updateLogDisplay();
        }

        // Initial load
        updateLogDisplay();
    
