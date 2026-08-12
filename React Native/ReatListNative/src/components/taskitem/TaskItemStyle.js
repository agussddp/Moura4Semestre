import { StyleSheet } from 'react-native';

export const TaskItemStyle = StyleSheet.create({
  cardbox: {
    flexDirection: "row",           
    height: 70,
    gap: 15,
    marginBottom: 15,
    backgroundColor: "#313664",
    alignItems: "center",           
    justifyContent: "space-between",
    paddingHorizontal: 15,          
    borderRadius: 8,                
  },
  cardText: {
    flex: 1,
    color: "white",
    fontSize: 16,
    flex: 1,                       
  },
  buttonGroup: {
    flexDirection: "row",           
    alignItems: "center",
  },
  cardButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",   

    borderWidth: 1,
    borderStyle: "solid",
    borderRadius:5,
  },
  cardButtonEditColor:{
    borderColor:"#9abaee",
  },
  cardButtonTrashColor:{
    borderColor:"#B75D63",
  }
 
});
