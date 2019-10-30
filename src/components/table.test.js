import React from "react";
import "@babel/polyfill";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Table from "./table.js";
import cones from "../../cones";
import ConeContext from "../utils/coneContext";

configure({adapter: new Adapter()});

describe("<Table />", () => {
    it("Should render the component", () => {
        const renderSpy = jest.spyOn(Table.prototype, "render");
        mount(<ConeContext.Provider value={{cones: cones}}><Table riskLevel={3} initialSum={10000} /></ConeContext.Provider>);
        expect(renderSpy).toHaveBeenCalledTimes(1);
    });

    it("Should render the tabel row for all ", () => {
        const tableComponent = mount(<ConeContext.Provider value={{cones: cones}}><Table riskLevel={3} initialSum={10000} /></ConeContext.Provider>);
        expect(tableComponent.find("tr[data-test-id^=\"time-series-\"]")).toHaveLength(121);
    });
});