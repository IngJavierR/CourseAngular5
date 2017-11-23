import { ConsumeService } from './services/consume.service';
import { DataService } from './services/data.service';
import { ContactService } from "./services/contact.service";
import { ReactiveService } from './services/reactive.service';
import { CommService } from "./services/comm.service";

export const APP_PROVIDERS = [
    ConsumeService,
    DataService,
    ContactService,
    ReactiveService,
    CommService
];
