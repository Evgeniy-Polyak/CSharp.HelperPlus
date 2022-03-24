import * as vscode from 'vscode';
import { DependencyInjector } from './inject-dependency';
import { FileCreator } from './file-creator';
import { CodeEmbed } from './code-embed';
import { NamespaceFixer } from './namespace-fixer';
import { MethodAsyncToggler } from './method-async-toggler';
import { FilenameFixer } from './filename-fixer';

export function activate(context: vscode.ExtensionContext) {
	const injector = new DependencyInjector()
	context.subscriptions.push(vscode.commands.registerCommand('csharp-helper-plus.inject-dependency', injector.inject));

	const fileCreator = new FileCreator();
	context.subscriptions.push(vscode.commands.registerCommand('csharp-helper-plus.create-class', fileCreator.createClass));
	context.subscriptions.push(vscode.commands.registerCommand('csharp-helper-plus.create-interface', fileCreator.createInterface));
	context.subscriptions.push(vscode.commands.registerCommand('csharp-helper-plus.create-enum', fileCreator.createEnum));
	context.subscriptions.push(vscode.commands.registerCommand('csharp-helper-plus.create-test', fileCreator.createTest));

	const codeEmbed = new CodeEmbed();
	context.subscriptions.push(vscode.commands.registerCommand('csharp-helper-plus.embed-code', codeEmbed.embedCode));

	const namespaceFixer = new NamespaceFixer();
	context.subscriptions.push(vscode.commands.registerCommand('csharp-helper-plus.fix-namespace', namespaceFixer.fix));

	const filenameFixer = new FilenameFixer();
	context.subscriptions.push(vscode.commands.registerCommand('csharp-helper-plus.fix-filename', filenameFixer.fix));

	const methodAsyncToggler = new MethodAsyncToggler();
	context.subscriptions.push(vscode.commands.registerCommand('csharp-helper-plus.toggle-method-sync', methodAsyncToggler.toggle));
}

export function deactivate() { }