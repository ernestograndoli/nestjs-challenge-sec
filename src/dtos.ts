import { ApiProperty } from "@nestjs/swagger";

export class WalletDto {
    @ApiProperty({ description: "Wallet Id" })
    id: number;
    @ApiProperty({ description: "Wallet Name" })
    name: string
}