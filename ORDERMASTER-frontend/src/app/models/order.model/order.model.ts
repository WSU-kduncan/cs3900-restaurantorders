export interface Order 
{
    orderId: number;
    serverId: number;
    tableId: number;
    date: string;
    timeOrdered: string; //temporary just for data entry purposes
    timeCompleted: string;
    status: string;
    //specialInstructions: string;
}
