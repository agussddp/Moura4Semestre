import { StyleSheet } from 'react-native';

export const TaskItemStyle = StyleSheet.create({
  cardbox: {
    flexDirection: "row",           
    height: 70,
    marginBottom: 15,
    backgroundColor: "#313664",
    alignItems: "center",           
    justifyContent: "space-between",
    paddingHorizontal: 15,          
    borderRadius: 8,                
  },
  cardText: {
    color: "white",
    fontSize: 16,
    flex: 1,                       
  },
  buttonGroup: {
    flexDirection: "row",           
    alignItems: "center",
  },
  cardButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
                
  },
 
});
