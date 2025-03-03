
        // Food database (you can add more items here)
        const foodDatabase = [
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
            // Add more food items in same format
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
                name: "Rice",
                calories: 130,
                sodium: 1,
                carbs: 28,
                sugar: 0.1,
                protein: 2.7,
                fat: 0.3,
                vitaminC: 0
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
    
