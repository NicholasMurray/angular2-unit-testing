System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var InitCapsPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InitCapsPipe = (function () {
                function InitCapsPipe() {
                }
                InitCapsPipe.prototype.transform = function (value) {
                    return value.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
                        return m.toUpperCase();
                    });
                };
                InitCapsPipe = __decorate([
                    core_1.Pipe({ name: 'initCaps' }), 
                    __metadata('design:paramtypes', [])
                ], InitCapsPipe);
                return InitCapsPipe;
            })();
            exports_1("InitCapsPipe", InitCapsPipe);
        }
    }
});
// import {Pipe} from 'angular2/core';
//
// @Pipe({ name:'initCaps'})
// export class InitCapsPipe {
//   transform (value: string) {
//       return value.toLowerCase().replace(/(^|\s[a-z]/g, function(m) {
//         return m.toUpperCase();
//       });
//   }
// }
//# sourceMappingURL=init-caps-pipe.js.map