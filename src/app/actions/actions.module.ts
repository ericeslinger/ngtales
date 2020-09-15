import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdjustComponent } from './adjust/adjust.component';
import { AttackComponent } from './attack/attack.component';
import { CommonModule } from '@angular/common';
import { DefendComponent } from './defend/defend.component';
import { HealthComponent } from './health/health.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { MaterialModule } from '../core/material/material.module';
import { NgModule } from '@angular/core';
import { NoncombatComponent } from './noncombat/noncombat.component';
import { PipesModule } from '../core/pipes/pipes.module';
import { RequestComponent } from './roll/request.component';
import { RollComponent } from './roll/roll.component';

@NgModule({
  declarations: [
    AttackComponent,
    InitiativeComponent,
    DefendComponent,
    RollComponent,
    AdjustComponent,
    RequestComponent,
    HealthComponent,
    NoncombatComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  exports: [AdjustComponent, RequestComponent],
})
export class ActionsModule {}
