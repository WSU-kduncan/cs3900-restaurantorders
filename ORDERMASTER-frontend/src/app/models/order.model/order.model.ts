export interface Order 
{
    orderId: number;
    serverId: number;
    tableId: number;
    date: Date;
    timeOrdered: Date;
    timeCompleted: Date;
    status: string;
    specialInstructions: string;
}
