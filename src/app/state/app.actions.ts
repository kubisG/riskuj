export class AddPoints {
  static readonly type = '[App] Add Points';
  constructor(public points: number) { }
}

export class SubstractPoints {
  static readonly type = '[App] Substract Points';
  constructor(public points: number) { }
}

export class BetPoints {
  static readonly type = '[App] Bet Points';
  constructor(public points: number) { }
}

export class AddBonus {
  static readonly type = '[App] Add Bonus';
  constructor() { }
}

export class SubstractBonus {
  static readonly type = '[App] Substract Bonus';
  constructor() { }
}


