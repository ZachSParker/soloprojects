def nom_my_denom(amount):
    change = {'Quarters':0,'Dimes':0,'Nickels':0,'Pennies':0}
    change['Quarters'] =amount//25
    amount = amount%25
    change['Dimes'] =amount//10
    amount = amount%10
    change['Nickels'] =amount//5
    amount = amount%5
    change['Pennies'] =amount//1
    print(f"your change is:{change['Quarters']} Quarters,{change['Dimes']} Dimes,{change['Nickels']} Nickels,{change['Pennies']} Pennies")
nom_my_denom(87)
