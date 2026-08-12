import { StyleSheet } from 'react-native';

export const TaskItemStyle = StyleSheet.create({
  cardbox: {
    flexDirection: 'row',      
    alignItems: 'center',      
    justifyContent: 'space-between', 
    backgroundColor: '#222a37', 
    borderRadius: 8,            
    padding: 16,               
    marginTop: 12,              
    width: '100%',
  },
  cartText:{
       color: '#d1d5db',         
    fontSize: 15,
    flex: 1,                    
    marginRight: 10,
  }, 
    actionsGroup: {
    flexDirection: 'row',       
    gap: 12,                    
  },
  iconImage: {
    width: 24,                
    height: 24,               
    resizeMode: 'contain',     
  }
});


