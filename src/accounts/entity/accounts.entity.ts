import { OAuthField } from "src/common/interface/oauth.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amoId: number;

  @Column()
  domain: string;

  get url(): string {
    return `https://${this.domain}`
  }

  @Column({
    type: 'json'
  })
  oauth: OAuthField
}