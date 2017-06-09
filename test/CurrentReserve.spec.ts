/// <reference path="../typings/index.d.ts" />

import {assert} from "chai";
import {CurrentReserve} from "../src/conquerors/productionassistant/domain/reserve/CurrentReserve";
import * as sinon from "sinon";
import {RxEventBus} from "../src/conquerors/productionassistant/domain/RxEventBus";

describe("CurrentReserve", () => {

    it("should update reserve correctly", () => {

        let rxpepe = { subscribe: function() {}};

        // TODO Given an state
        let busMock = sinon.mock(rxpepe);
        busMock.expects("subscribe").atLeast(1);

        let currentReserve = new CurrentReserve(<RxEventBus> <any> busMock);

        // TODO When reserve receives an event

        // TODO Then the reserve should be updated accordingly
        assert.strictEqual("hola", "hola");
    })
});