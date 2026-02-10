import { AuthorizationDTO } from "@/dtos/api/authorization.dto";
import { Schema } from "@caffeine/schema";

export const AuthorizationSchema = Schema.make(AuthorizationDTO);
