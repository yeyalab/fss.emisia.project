describe('FSS.view.desktop.main.MainController', function () {

    //reusable scoped variable
    var Main = null;
    var MainController = null;

    //setup/teardown
    beforeEach(function () {
        //create a fresh grid for every test to avoid test pollution
        Main = Ext.create('FSS.view.desktop.main.Main', {
            renderTo: 'test'
        });
        MainController = Main.getController();

        jasmine.addMatchers(matchers);
        spyOn(MainController, 'redirectTo');
    });

    afterEach(function () {
        //destroy the grid after every test so we don't pollute the environment
        Main.destroy();
    });

    it('should not fail on onTabChange', function () {
        expect(function () {
            MainController.onTabChange(Main, Main.getActiveItem());
        }).not.toThrow();
    });

    describe('should not fail on onRouteNavigate', function () {

        it('should not fail on onRouteNavigate', function () {
            expect(function () {
                MainController.onRouteNavigate();
            }).not.toThrow();
        });

        it('should not fail without activeItem', function () {
            expect(function () {
                MainController.onRouteNavigate();
            }).not.toThrow();

            spyOn(Main, 'getActiveItem').and.callFake(function () {
                return {
                    id: 'test1'
                };
            });
            expect(function () {
                MainController.onRouteNavigate();
            }).not.toThrow();
        });

        it('should not fail without route', function () {
            spyOn(Main, 'lookup').and.callFake(function () {
                this.getItems().getAt(0);
            });
            expect(function () {
                MainController.onRouteNavigate();
            }).not.toThrow();
        });
    });
});